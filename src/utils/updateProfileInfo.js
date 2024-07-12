import { auth, db } from './firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const getUserProfile = async () => {
  const user = auth.currentUser;
  
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDoc);
    
    if (userSnapshot.exists()) {
      return { success: true, data: userSnapshot.data() };
    } else {
      return { success: false, error: 'User profile not found.' };
    }
  } else {
    return { success: false, error: 'No user is signed in.' };
  }
};

export const updateUserProfile = async (profileData) => {
  const user = auth.currentUser;
  
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    
    try {
      await updateDoc(userDoc, profileData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    return { success: false, error: 'No user is signed in.' };
  }
};
