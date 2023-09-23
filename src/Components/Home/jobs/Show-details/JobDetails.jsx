import { useLoaderData, useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../../../JS/LocalStorage";


const JobDetails = () => {
  const jobs = useLoaderData()
  const { id } = useParams();
  const idInt = parseInt(id);

  const retrievedJob = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirement,
    experiences,
    salary,
    job_title,
    contact_info,
  } = retrievedJob;



  const { Phone, email, address } = contact_info;
  return (
    <div className="w-full md:max-w-6xl mx-auto">
      <h1 className="text-5xl text-center py-8">Job details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
        {/* left coumn */}
        <div className="md:col-span-2">
          <div>
            <h2>Job Description:</h2>
            <p>{job_description}</p>
          </div>
          <div>
            <h2>Job Responsibility</h2>
            <p>{job_responsibility}</p>
          </div>
          <div>
            <h2>Educational Requirements</h2>
            <p>{educational_requirement}</p>
          </div>
          <div>
            <h2>Experiences</h2>
            <p>{experiences}</p>
          </div>
        </div>
        {/* right column */}
        <div>
          <h2>Job Details</h2>
          <strong>Salary:{salary}</strong>
          <p>
            <strong>Job Title:</strong> {job_title}
          </p>
          <h2>Contact Information</h2>
          <p>
            <strong>Phong: </strong> {Phone}
          </p>
          <p>
            <strong>Eamil: </strong> {email}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white rounded my-3 text-center">
            <button onClick={()=> saveToLocalStorage(id)} className="text-center">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {JobDetails};
