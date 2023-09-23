import { AiOutlineEnvironment, AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    remote_or_onsite,
    company_name,
    location,
    salary,
    job_type,
    id,
  } = job;
  return (
    <div className=" text-left bg-gradient-to-r from-[#7e8ffe07] to-[#9873ff13] outline-[#0000003e]  outline hover:cursor-pointer outline-[1px] duration-500 p-4 rounded ">
      <div className="space-y-1">
        <img className="w-11" src={logo} alt="" />
        <h1>{job_title}</h1>
        <p>{company_name}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="outline p-1 rounded text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {remote_or_onsite}
        </button>
        <button className="outline p-1 rounded text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {job_type}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-2">
          <AiOutlineEnvironment></AiOutlineEnvironment> {location}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineDollarCircle></AiOutlineDollarCircle>.salary: {salary}
        </p>
      </div>
      <Link to={`/jobs/${id}`}>
        <button className="text-white mt-5 p-2 rounded bg-gradient-to-r from-blue-500 to-purple-500">

          Show Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
