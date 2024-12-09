import React from 'react';
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            This is Home
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;