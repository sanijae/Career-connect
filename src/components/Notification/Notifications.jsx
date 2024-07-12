import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth } from '../../utils/firebaseConfig';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {
      setNotifications([]);
      return;
    }

    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNotifications(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <p>{notification.message}</p>
          <p>{new Date(notification.createdAt.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
