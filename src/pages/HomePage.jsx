import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      {/* Show only 3 jobs on home */}
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
