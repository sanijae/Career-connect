import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ViewApplications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const q = query(collection(db, 'applications'), where('jobId', '==', jobId));
      const querySnapshot = await getDocs(q);

      setApplications(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div>
      <h2>Job Applications</h2>
      {applications.map((app) => (
        <div key={app.id}>
          <p>User ID: {app.userId}</p>
          <p>Cover Letter: {app.coverLetter}</p>
          <p>Applied At: {new Date(app.appliedAt.seconds * 1000).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewApplications;
