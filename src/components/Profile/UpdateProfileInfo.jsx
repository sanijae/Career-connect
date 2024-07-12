import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../utils/updateProfileInfo';

const UpdateProfileInfo = () => {
  const [profile, setProfile] = useState({ name: '', bio: '', location: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getUserProfile();
      
      if (result.success) {
        setProfile(result.data);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateUserProfile(profile);

    if (result.success) {
      setStatus('Profile updated successfully.');
    } else {
      setStatus(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default UpdateProfileInfo;
