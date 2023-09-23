import { Link } from "react-router-dom";


const AppliedJob = ({job}) => {
      const {
            id,
            salary,
            job_type,
            remote_or_onsite,
            job_title,
            logo,
          } = job;
      

      return (
            <div className="flex justify-between outline outline-[1px] outline-[#9db9ce82] my-3 p-4 rounded-lg items-center max-w-5xl mx-auto">
                  <div className="flex items-center my-4 gap-3">
                  <div className="flex items-center p-6 bg-[#b9b9ff42]"><img className="w-[100px]" src={logo} alt="" /></div>
                  <div>
                  <h2 className="text-2xl font-bold">{job_title}</h2>
                  <p>Salary: ${salary}</p>
                  <div className="flex gap-3 my-1 items-center">
                        <p>{job_type}</p>
                        <p>{remote_or_onsite}</p>
                  </div>
                  </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white rounded my-3 text-center">
                  <Link to={`/jobs/${id}`}>
                        <button>Show Details</button>
                        </Link>
                  </div>
            </div>
      );
};

export default AppliedJob;