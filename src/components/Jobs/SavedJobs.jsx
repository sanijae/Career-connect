import React, { useState } from 'react';
import fakeSavedJobs from './fakeSavedJobs';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(fakeSavedJobs);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Saved Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedJobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-1">Company: {job.company}</p>
            <p className="text-gray-700 mb-1">Saved Date: {job.savedDate}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-900 text-white py-2 px-4 rounded">View Details</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">Remove from Saved</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
