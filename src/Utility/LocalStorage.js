const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, saveJobApplication}



// const getStoredJobApplicatios = () => {
//     const storedJobApplication=localStorage.getItem('jobApplications')
//     if (storedJobApplication) {
//         return JSON.parse(storedJobApplication)
//     }
//     return ;
// };

// const saveStoredJobApplicatios = (id) => {
//     const storedJobApplicationS=getStoredJobApplicatios();
//     const exist=storedJobApplicationS.find(stdID===id)
//     if (!exist) {
//         storedJobApplicationS.push(id);
//         localStorage.setItem('jobApplications',JSON.stringify(storedJobApplicationS))
//     }
    
// };

// export default {getStoredJobApplicatios, saveStoredJobApplicatios}