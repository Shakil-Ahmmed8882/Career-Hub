import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../JS/LocalStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const jobsApplied = getFromLocalStorage();

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // array of applied jobs
  const appliedJobsContainer = [];
  for (const id of jobsApplied) {
    const anyJobApplied = jobs?.find((job) => job.id == id);
    if (anyJobApplied) {
      appliedJobsContainer.push(anyJobApplied);
    }
  }

  //   state to filter applied jobs
    const [selectedValue, setSelectedValue] = useState();
    const [displayJobs, setToDisplayJobs] = useState(appliedJobsContainer)
    
    const handleFilterJob = (e) => {
      setSelectedValue(e.target.value);
    };
    
    // filter the job here
    useEffect(()=>{
      if(appliedJobsContainer){
      if(selectedValue === 'all'){
        setToDisplayJobs(appliedJobsContainer)
        console.log(displayJobs,selectedValue)
      } else if(selectedValue === 'remote'){
        const remoteJobs = appliedJobsContainer.filter(job => job.remote_or_onsite === 'Remote')
        setToDisplayJobs(remoteJobs)
      } else if(selectedValue === 'onsite'){
        const onsiteJobs = appliedJobsContainer.filter(job => job.remote_or_onsite === 'Onsite')
        setToDisplayJobs(onsiteJobs)
      }
    }

  },[selectedValue])
  return (
    <div>
      <h1 className="text-4xl text-center pt-8 pb-3 font-bold">Applied jobs</h1>
      <div className="text-right max-w-5xl mx-auto">
        <select
          className="p-2"
          value={selectedValue}
          onChange={handleFilterJob}>
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>z
        </select>
      </div>
      <div>
        {appliedJobsContainer?.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
