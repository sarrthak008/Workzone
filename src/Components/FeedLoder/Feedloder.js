import React, { useState, useEffect } from 'react';
import './Feed.css';
import axios from 'axios';
import FeedCard from '../FeedCrad/FeedCard'; 
import Loder from '../Loder/Loder';

const FeedLoader = ({searchVal}) => {

  const [feed, setFeed] = useState([]);

  const searchJob = async (jobName) => {
    if (!jobName) return alert('Please enter job title..');

    jobName = jobName.replaceAll(" ", "%20");
    const JOB_URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=39dac257&app_key=99a6d028cc6454fda3d0c48041c17ad5&results_per_page=20&what=${jobName}&where=london&content-type=application/json`;
    const USER_URL = `https://randomuser.me/api/?results=20&nat=IN`;

    try {
      const jobResponse = await axios.request(JOB_URL);
      const userResponse = await axios.request(USER_URL);

      const jobs = jobResponse.data.results;
      const users = userResponse.data.results;

      console.log(jobs)
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
      setFeed(feedData);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(()=>{
      searchJob('web dev')
  },[])
 
  useEffect(()=>{
      searchJob(searchVal)
  },[searchVal])


  return (
    <div className='feed-card-container'>
      {feed.length==0 ?<Loder/> :  feed.map((feedItem, index) => (
        <FeedCard key={index} info={feedItem} />
      ))}
    </div>
  );
};

export default FeedLoader;
