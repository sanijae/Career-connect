import React, { useState } from 'react';
import fakeAppliedJobs from './fakeAppliedJobs';

const JobsApplied = () => {
  const [appliedJobs, setAppliedJobs] = useState(fakeAppliedJobs);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Jobs Applied</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appliedJobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-1">Company: {job.company}</p>
            <p className="text-gray-700 mb-1">Applied Date: {job.appliedDate}</p>
            <p className="text-gray-700 mb-1">Status: {job.status}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-900 text-white py-2 px-4 rounded">View Details</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">Withdraw Application</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsApplied;
