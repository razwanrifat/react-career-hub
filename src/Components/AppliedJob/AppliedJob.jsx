import React from 'react';

const AppliedJob = ({apjob}) => {
    const {logo,id,job_title,remote_or_onsite,salary}=apjob;
    return (
        <div className='flex justify-between m-3 border-2 max-w-96 border-indigo-600 ...'>
            <div>
                <span>ID:{id}.{job_title}</span>
                <p>Salary{salary}.</p>
                <p>Type: {remote_or_onsite}</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default AppliedJob;