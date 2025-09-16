import React from 'react';
import JobListings from '../components/JobListings';

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      {/* Show 6 jobs on jobs page */}
      <JobListings limit={6} />
    </section>
  );
};

export default JobsPage;
