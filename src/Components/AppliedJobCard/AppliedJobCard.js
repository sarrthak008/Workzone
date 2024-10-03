import "./AppliedJobCard.css"


const AppliedJobCard = ({job}) => {
  return (
    <div className="job-card-body">
       <span className="job-company-name">{job.c_name}</span>
       <span className="gray">#{job.tag}</span>
       <span className="info-font"> you applied for position <span className="blue-txt">{job.title}</span></span>
       <span  className="info-font">applied on {job.date}</span>
       <span  className="info-font">job added by <span  className="blue-txt">@{job.first_name}</span></span>
       <span className="info-font">status 
       <span>  <i class="ri-circle-fill" style={{color:'yellow'}}></i></span></span>
    </div>
  )
}

export default AppliedJobCard
