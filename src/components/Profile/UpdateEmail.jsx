import React, { useState } from 'react';
import { updateEmailAddress } from '../../utils/UpdateEmail';

const UpdateEmail = () => {
  const [newEmail, setNewEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await updateEmailAddress(newEmail);

    if (result.success) {
      setStatus('Email updated successfully.');
    } else {
      setStatus(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <h2>Update Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Email</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default UpdateEmail;
