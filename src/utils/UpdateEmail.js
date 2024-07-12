import { auth } from './firebaseConfig';

export const updateEmailAddress = async (newEmail) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await user.updateEmail(newEmail);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    return { success: false, error: 'No user is signed in.' };
  }
};
