import React, { useState } from 'react';
import { updateProfileImage } from '../../utils/updateProfileImage';

const UpdateProfileImage = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const result = await updateProfileImage(file);

      if (result.success) {
        setStatus('Profile image updated successfully.');
        setImageURL(result.downloadURL);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } else {
      setStatus('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h2>Update Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Image</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Update Image</button>
      </form>
      {status && <p>{status}</p>}
      {imageURL && <img src={imageURL} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />}
    </div>
  );
};

export default UpdateProfileImage;
