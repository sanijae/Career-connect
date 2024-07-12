import React, { useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';


const Settings = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    sms: false,
    push: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      if (displayName) {
        await updateProfile(auth.currentUser, { displayName });
      }
      if (email) {
        await updateEmail(auth.currentUser, email);
      }
      setSuccess('Profile updated successfully');
      setError('');
    } catch (error) {
      setError('Failed to update profile');
      setSuccess('');
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(auth.currentUser, password);
      setSuccess('Password updated successfully');
      setError('');
    } catch (error) {
      setError('Failed to update password');
      setSuccess('');
    }
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleUpdateNotifications = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        notificationPreferences,
      });
      setSuccess('Notification preferences updated successfully');
      setError('');
    } catch (error) {
      setError('Failed to update notification preferences');
      setSuccess('');
    }
  };

  return (
    <div className="container mx-auto p-8 py-20 flex justify-center">
        <div className='p-2 m-2 w-full lg:w-1/2 shadow-md'>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            
            {/* Profile Settings */}
            <form onSubmit={handleUpdateProfile} className="mb-8 shadow-lg p-2">
                <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
                <div className="mb-4 p-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
                        Display Name
                    </label>
                    <input
                        id="displayName"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Update Profile
                </button>
            </form>

            {/* Password Settings */}
            <form onSubmit={handleUpdatePassword} className="mb-8 shadow-lg p-2">
                <h2 className="text-2xl font-semibold mb-4">Password Settings</h2>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    New Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Update Password
                </button>
            </form>

            {/* Notification Settings */}
            <form onSubmit={handleUpdateNotifications} className='mb-2 p-2'>
                <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailNotifications">
                    Email Notifications
                </label>
                <input
                    id="emailNotifications"
                    name="email"
                    type="checkbox"
                    checked={notificationPreferences.email}
                    onChange={handleNotificationChange}
                    className="mr-2 leading-tight"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="smsNotifications">
                    SMS Notifications
                </label>
                <input
                    id="smsNotifications"
                    name="sms"
                    type="checkbox"
                    checked={notificationPreferences.sms}
                    onChange={handleNotificationChange}
                    className="mr-2 leading-tight"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pushNotifications">
                    Push Notifications
                </label>
                <input
                    id="pushNotifications"
                    name="push"
                    type="checkbox"
                    checked={notificationPreferences.push}
                    onChange={handleNotificationChange}
                    className="mr-2 leading-tight"
                />
                </div>
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Update Notifications
                </button>
            </form>
      </div>
    </div>
  );
};

export default Settings;
