import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/LocalStorage';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs=useLoaderData();
    const [allAppliedJob,setAllAppliedJob]=useState([]);
    const [filterItem , setFilterItem]=useState([])
    useEffect(()=>{
        const storedJobs=getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied=[];
            for (const id of storedJobs) {
                
                const job=jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
                
            }
            setAllAppliedJob(jobApplied);
            setFilterItem(jobApplied);
        }
        
        
    },[])

    const handleFilter=filter=>{
        if (filter === 'all') {
            setFilterItem(allAppliedJob);
        }
        else if(filter === 'remote'){
            const remoteDisplay=allAppliedJob.filter(job=>job.remote_or_onsite==='Remote')
            setFilterItem(remoteDisplay);
        }

        else if(filter === 'onsite'){
            const Onsitedisplay=allAppliedJob.filter(job=>job.remote_or_onsite==='Onsite')
            setFilterItem(Onsitedisplay);
        }

    }



    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Applied Jobs :{allAppliedJob.length} </h1>


           <div className='flex justify-end mx-3'>
            
           <details className="dropdown ">
                <summary className="btn ">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box shadow">
                    <li onClick={()=>handleFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleFilter('onsite')}><a>On-site</a></li>
                </ul>
            </details>
           </div>
            


            <div>
                {
                    filterItem.map(apjob=><AppliedJob apjob={apjob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;