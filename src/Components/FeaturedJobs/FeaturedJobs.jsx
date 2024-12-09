import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const[featuredJpb,setfeaturedJpb]=useState([]);
    const[jobCount,setJobCount]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(response => response.json())
        .then(data => setfeaturedJpb(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Featured Jobs : {featuredJpb.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
                <div className='m-4 p-3 grid grid-cols-2 gap-4'>
                    {
                        featuredJpb.slice(0,jobCount).map(fjob=><Job JobProp={fjob}></Job>)
                    }
                </div>

                <div className={jobCount===featuredJpb.length && 'hidden'}>
                    <div className='text-center m-3 '>
                    <button onClick={()=>setJobCount(featuredJpb.length)} className="  btn btn-outline btn-info">See All Job</button>
                    </div>
                </div>
           
        </div>
    );
};

export default FeaturedJobs;