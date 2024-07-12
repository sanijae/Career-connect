import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import jobsData from './Jobs';
import Footer from '../Footer/Footer';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const jobId = id;

  useEffect(() => {
    const fetchJob = async () => {
      try {
        // const jobDoc = await getDoc(doc(db, 'jobs', jobId));
        // if (jobDoc.exists()) {
        //   setJob({ id: jobDoc.id, ...jobDoc.data() });
        // } else {
        //   const fallbackJob = jobsData.find(job => job.id === 1);
        //   if (fallbackJob) {
        //     setJob(fallbackJob);
        //   }
        // }
        const fallbackJob = jobsData.find(job => job.id === 1);
          if (fallbackJob) {
            setJob(fallbackJob);
          }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);
console.log(id);

  if (loading) {
    return (
      <>
      <div className="flex justify-center items-center py-16">
        <div className="shadow p-10 text-center m-10">
          <h1 className="text-4xl font-bold ">Loading...</h1>
        </div>
      </div>
      <Footer/>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <div className="flex justify-center items-center py-16">
          <div className="shadow p-10 text-center m-10">
            <h1 className="text-4xl font-bold ">Job Not Found</h1>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
    <div className='flex justify-center py-16'>
      <div className='w-full md:w-2/3'>
      <div className="w-full mt-10 mx-auto pt-5 items-center">
        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-4xl font-bold mb-4 border-b-2 border-gray-300 shadow-sm p-2">{job.title}</h1>
          <div className="flex items-center mb-4">
            <p className="text-gray-700 text-lg">{job.company}</p>
            <span className="mx-2">|</span>
            <p className="text-gray-700 text-lg">{job.location}</p>
          </div>
          <div>
            <p className='text-xl text-gray-900 mb-1 font-bold'>Job type</p>
            <p className="text-gray-700 mb-4">{job.type}</p>
          </div>
          <div>
            <p className='text-xl text-gray-900 mb-1 font-bold'>Job Domain</p>
            <p className="text-gray-700 mb-4">{job.domain}</p>
          </div>
          <div>
            <p className='text-xl text-gray-900 mb-1 font-bold'>Job Descriptions</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
          </div>
          <div className="flex flex-col mt-6">
            <Link to={`/apply/${jobId}`} className="bg-blue-900 text-white py-2 px-4 rounded mb-5 w-fit">Apply Now</Link>
            <button className="bg-gray-700 text-white py-2 px-4 rounded w-fit">Save Job</button>
          </div>
          {/* <div className='mt-10 w-full'>
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">Report this post</button>
          </div> */}
        </div>
      </div>
      {/* <Similar/> */}
      {/* {showApply && <JobApplication showApply={showApply} setShowApply={setShowApply} />} */}
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default JobDetails;

export const Similar =()=>{
  return(
    <div className='w-full bg-slate-700'>
      <div className='flex flex-col p-2 m-1 bg-white'>
      <h1 className='text-3xl p-1 m-1 font-bold border-b-2 border-gray-300'>You may also like</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {jobsData.map(job =>(
          <div className='flex p-1 flex-col mt-1 mb-1 border-b-2 border-gray-200 hover:bg-gray-300'>
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-700">{job.location}</p>
            <p className="text-gray-700">{job.type}</p>
            <p className="text-gray-700 mb-4">{job.domain}</p>
            <p className="text-gray-700">{job.description}</p>
          </div>))}
        </div>
      </div>
    </div>
  )
}