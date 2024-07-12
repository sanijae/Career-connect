import React, { useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

const VerifyCodeAndResetPassword = ({ email }) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = (await auth.fetchSignInMethodsForEmail(email))[0];
      const userDoc = doc(db, 'resetCodes', user);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists() && docSnap.data().resetCode === code) {
        await auth.confirmPasswordReset(user, newPassword);
        await deleteDoc(userDoc);
        setStatus('Password has been reset successfully.');
      } else {
        setStatus('Invalid reset code.');
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reset Code</label>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default VerifyCodeAndResetPassword;
