import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../../utils/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [domain, setDomain] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobTitle || !company || !location || !jobType || !domain || !description) {
      setError('All fields are required');
      return;
    }

    try {
      await addDoc(collection(db, 'jobs'), {
        title: jobTitle,
        company,
        location,
        type: jobType,
        domain,
        description,
        createdAt: serverTimestamp(),
      });
      setSuccess('Job posted successfully');
      setError('');
      setJobTitle('');
      setCompany('');
      setLocation('');
      setJobType('');
      setDomain('');
      setDescription('');
    } catch (error) {
      setError('Failed to post job');
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
              Salary
            </label>
            <input
              id="jobTitle"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
              Job Type
            </label>
            <input
              id="jobType"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
              Domain
            </label>
            <input
              id="domain"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="bg-white"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
