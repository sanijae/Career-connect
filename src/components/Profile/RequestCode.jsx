import React, { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';

const RequestResetCode = ({ onCodeSent }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const functions = getFunctions();
    const sendResetCode = httpsCallable(functions, 'sendResetCode');

    try {
      const result = await sendResetCode({ email });
      if (result.data.success) {
        setStatus('Reset code sent to your email.');
        onCodeSent(email);
      } else {
        setStatus(`Error: ${result.data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Send Reset Code</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default RequestResetCode;
