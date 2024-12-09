import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({JobProp}) => {
    const{logo,job_title,company_name,job_type,remote_or_onsite,location,salary,id}=JobProp;
    return (
        <div>
            <div className="card card-compact bg-base-200  shadow-xl">
            <figure>
                <img
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}!</h2>
                <p><span>{location};</span> </p>
                <p><span className=' font-bold'> Salary:{salary}</span></p>
                <div>
                <button className="btn btn-outline btn-accent mr-1">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-accent ">{job_type}</button>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/jobDetails/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Job;