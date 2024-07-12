import { auth, db, storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

export const updateProfileImage = async (file) => {
  const user = auth.currentUser;

  if (user) {
    const storageRef = ref(storage, `profileImages/${user.uid}/${file.name}`);
    
    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update the user's profile image URL in Firestore
      const userDoc = doc(db, 'users', user.uid);
      await updateDoc(userDoc, { profileImageURL: downloadURL });
      
      return { success: true, downloadURL };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    return { success: false, error: 'No user is signed in.' };
  }
};
