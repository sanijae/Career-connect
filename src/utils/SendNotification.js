import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const sendNotification = async (userId, message) => {
  try {
    await addDoc(collection(db, 'notifications'), {
      userId,
      message,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Error sending notification: ', error);
  }
};
