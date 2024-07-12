import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import jobsData from './Jobs';
// import Filter from './Filter';
import { IoLocation, IoSearch } from 'react-icons/io5';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [activeInput, setActiveInput] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='container-fluid'>
      {/* <Navbar navColor={'#1e0448'}/> */}
      <div className='flex flex-wrap justify-around py-16'>
        {/* <Filter /> */}
        <div className="container mx-auto px-4 py-2 w-full md:w-2/3 ml-auto">
          <div className='flex flex-wrap items-center border-2 border-gray-400 rounded-md p-2 m-3 mb-10'>
            <div
              className={`flex items-center p-2 mb-1 lg:mb-0 w-full lg:w-2/5 ${activeInput === 'title' ? 'border-2 border-blue-300 rounded-md' : ''}`}
              onClick={() => setActiveInput('title')}
            >
              <IoSearch className='font-bold text-2xl mr-4 w-1/12 '/>
              <input
                className='text-sm focus:outline-none w-11/12'
                placeholder='Job title, keyword, company....'
                onFocus={() => setActiveInput('title')}
              />
            </div>
            <div
              className={`flex items-center p-2 mb-1 lg:mb-0 w-full lg:w-2/5 ${activeInput === 'location' ? 'border-2 border-blue-300 rounded-md' : ''}`}
              onClick={() => setActiveInput('location')}
            >
              <IoLocation className='font-bold text-2xl mr-4 w-1/12'/>
              <input
                className='text-sm focus:outline-none w-11/12'
                placeholder='Location'
                onFocus={() => setActiveInput('location')}
              />
            </div>
            <button
              className='bg-blue-900 rounded p-2 text-sm border-none w-full lg:w-1/5 text-white focus:outline-none'
            >
              Search
            </button>
          </div>
          {jobs.length ? 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map(job => (
              <Link to={`/job/${job.id}`} key={job.id} className="bg-white shadow-md rounded p-4 cursor-pointer hover:bg-gray-200">
                <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-700">{job.location}</p>
                <p className="text-gray-700">{job.type}</p>
                <p className="text-gray-700 mb-4">{job.domain}</p>
                <p className="text-gray-700">{job.description}</p>
              </Link>
            ))}
          </div>
          :
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobsData.map(job => (
            <Link to={`/job/${job.id}`} key={job.id} className="bg-white shadow-md rounded p-4 cursor-pointer hover:bg-gray-200">
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-700">{job.location}</p>
              <p className="text-gray-700">{job.type}</p>
              <p className="text-gray-700 mb-4">{job.domain}</p>
              <p className="text-gray-700">{job.description}</p>
            </Link>
          ))}
        </div>}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default JobListings;
