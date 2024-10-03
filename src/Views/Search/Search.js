import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Search.css'
import Tagline from '../../Components/TagLine/Tagline'
import FeedCard from '../../Components/FeedCrad/FeedCard'
import axios from 'axios'
import toast from 'react-hot-toast'


const Search = () => {
  const [searchVal, setSearchVal] = useState('');
  const [feed, setFeed] = useState([]);

  useEffect(()=>{
     let oldfeed=JSON.parse(localStorage.getItem('FEED'))  || null
     if(oldfeed){
      setFeed(oldfeed)
     }     

  },[])

const searchJob = async (jobName) => {


    if (!jobName) return toast.error('please enter job role or info related job')

    jobName = jobName.replaceAll(" ", "%20");
    const JOB_URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=39dac257&app_key=99a6d028cc6454fda3d0c48041c17ad5&results_per_page=20&what=${jobName}&where=london&content-type=application/json`;
    const USER_URL = `https://randomuser.me/api/?results=20&nat=IN`;

    try {
       let tid= toast.loading('searching your query')
      const jobResponse = await axios.request(JOB_URL);
      const userResponse = await axios.request(USER_URL);

      const jobs = jobResponse.data.results;
      const users = userResponse.data.results;
      const feedData = jobs.map((job, index) => ({
        id: job.id,
        tag: job.category.tag,
        c_name: job.company.display_name,
        location: job.location.area[0],
        desc: job.description,
        post_at: job.created,
        max_sal: job.salary_max,
        min_sal: job.salary_min,
        title: job.title,
        first_name: users[index].name.first,
        last_name: users[index].name.last,
        user_location: users[index].location.city,
        profile_pic: users[index].picture.medium,
        email: users[index].email,
        gender: users[index].gender,
        dob: users[index].dob,
      }));
      if(feedData){
        toast.dismiss(tid)
        setSearchVal('')
      }
      setFeed(feedData);
      localStorage.setItem("FEED",JSON.stringify(feedData))
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div>
      <Sidebar />
      <div className='main-container'>
        <div className='searchbar-container'>
          <input type='text' className='serch-box' placeholder="eg. developer" value={searchVal} onChange={(e) => { setSearchVal(e.target.value) }}></input>
          <button className='btn1 seach-btn' onClick={() => {
             searchJob(searchVal)
          }}>search</button>
        </div>
        <Tagline tagline={'your feed'} />
        <div className='feed-card-container'>
          {feed.map((feedItem, index) => (
            <FeedCard key={index} info={feedItem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
