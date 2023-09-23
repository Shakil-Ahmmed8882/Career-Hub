import { useEffect, useState } from "react";
import Job from "./Job";



const Category_list = () => {

      const [jobs, setjobs] = useState([])

      useEffect(()=>{
            fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
      },[])

      const [dataLength, setDataLength] = useState(4)

      return (
            <div className="mt-11">
                  <h1 className="text-4xl font-bold text-center">Category: {jobs.length}</h1>                  
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 my-11">
                  {
                        jobs?.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                  }
                  </div>
                  <div className='text-center mt-11 mb-6'>
                        <button onClick={()=>{dataLength === jobs.length?setDataLength(4):setDataLength(jobs.length)}} className=" text-black p-3 rounded-lg outline outline-[1px] outline-[#000000a2]">{dataLength === jobs.length?'Show Less':'Show All'}</button></div>
            </div>
      );
};

export default Category_list;