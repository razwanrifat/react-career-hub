import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/LocalStorage';
// import{saveStoredJobApplicatios} from "../../Utility/LocalStorage"
//import { saveJobApplication } from "../../utility/localstorage";
              

const JobDetails = () => {
   
    const jobs=useLoaderData();
    const {id} =useParams();
    const idInt=parseInt(id)
    
    const job=jobs.find(jb=>jb.id=== parseInt(idInt))
    console.log(job, idInt);
    
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("Apply Success Full !");     
    }
    
    
    return (
        <div>
            
            <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 ...  border-2 border-indigo-600 my-2">
                <h2 className="text-4xl text-center font-bold">Job Details</h2>
                <p className="font-bold underline">Job Title :</p><span>{job.job_title}</span>
                <p className="font-bold underline">Experiences :</p><span>{job.experiences}</span>
                <p className="font-bold underline">Description :</p><span>{job.job_description}</span>
                <p className="font-bold underline">Educational Requirements :</p><span>{job.educational_requirements}</span>
                <p className="font-bold underline">Company Name :</p><span>{job.company_name}</span>
            </div>
            <div class="... border-2 border-indigo-600 my-2 mx-1">
        
            <p className="font-bold ">Salary :{job.salary}</p>
            <p className="font-bold "> Address : {job.address}  </p>
            <button onClick={handleApplyJob} class="btn btn-success w-full">Apply Now</button>
            <Link to="/appliedJobs"><button className="btn btn-outline btn-accent m-3">See All Applied</button></Link>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;