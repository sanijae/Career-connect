import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import sampleApplicantsData from './sampleApplicantsData';
import SendMessageForm from './sendMessage';

const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const q = query(collection(db, 'applicants'));
        const querySnapshot = await getDocs(q);
        const applicantsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setApplicants(applicantsData);
      } catch (error) {
        console.error('Error fetching applicants:', error);
        setApplicants(sampleApplicantsData); // Fallback to sample data in case of error
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Applicants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicants.map(applicant => (
          <div key={applicant.id} className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-2">{applicant.name}</h2>
            <p className="text-gray-700">{applicant.jobTitle}</p>
            <p className="text-gray-700">Applied on: {applicant.appliedDate}</p>
            <p className="text-gray-700">Status: {applicant.status}</p>
            <a href={applicant.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Resume
            </a>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Mark as Reviewed</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Schedule Interview</button>
            </div>
            <SendMessageForm applicantId={applicant.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsPage;
