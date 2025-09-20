import React from 'react';
import JobListings from '../components/JobListings';

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      {/* Show all jobs on jobs page */}
      <JobListings isHome={false} />
    </section>
  );
};

export default JobsPage;
