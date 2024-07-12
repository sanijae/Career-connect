import React, { useState, useEffect } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../Navbar/Navbar';
import './profile.css'
import { MdEmail, MdPhone, MdUpdate } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";
import { IoLocation, IoEyeOutline } from 'react-icons/io5';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: '', bio: '', skills: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadProfile(currentUser.uid);
      } else {
        setUser(null);
        setProfile({ name: '', bio: '', skills: '' });
      }
    });

    return () => unsubscribe();
  }, []);

  const loadProfile = async (uid) => {
    const docRef = doc(db, 'profiles', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProfile(docSnap.data());
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (user) {
      await setDoc(doc(db, 'profiles', user.uid), profile);
      alert('Profile updated successfully');
    } else {
      alert('User not authenticated');
    }
  };

  return (
    <>
      <div className='p-2 py-20 m-1 flex justify-center bg-white text-gray-600'>
        <div className='profile'>
          <div className='pro_title  p-3 m-2 md:p-10 md:justify-around rounded-sm shadow-lg'>
            <h1 className='text-5xl'>John Doe</h1>
            <img className='pro_avatar' alt='Profile' src={require('../../Asset/Icons/saj.jpg')}/>
          </div>
          <div className='pro_title m-2 p-3 px-8 flex items-center md:justify-around rounded-sm shadow-lg'>
            <div className='flex flex-col'>
              <h1 className='flex items-center p-2 text-sm'> <MdEmail/> &nbsp; Johndoe@email.com</h1>
              <h1 className='flex items-center p-2 text-sm'> <MdPhone/>&nbsp; +123 806433 333</h1>
              <h1 className='flex items-center p-2 text-sm'> <IoLocation/> &nbsp; New york, USA</h1>
            </div>
            <div className='font-bold text-2xl'>
              <IoIosArrowForward />
            </div>
          </div>
          <div className='rounded shadow-lg m-2'>
            <h1 className='text-4xl p-2 m-2'>Resumes</h1>
            <div className='pro_title m-2 p-3 px-8 flex items-center md:justify-around border-2 border-r-black rounded-md cursor-pointer hover:bg-gray-200'>
              <div className='flex flex-col'>
                <h1 className='flex items-center p-2 text-2xl'> Career Resume</h1>
                <h1 className='flex items-center p-2 text-xs'> <MdUpdate />&nbsp; Update 20-01-2024</h1>
                <h1 className='flex items-center p-2 text-xs'> <IoEyeOutline /> &nbsp; Searchable</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
            <div className='pro_title m-2 p-3 px-8 flex items-center md:justify-around border-2 border-r-black rounded-md cursor-pointer hover:bg-gray-200'>
              <div className='flex flex-col'>
                <h1 className='flex items-center p-2 text-2xl'> Upload new resume</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className='rounded shadow-lg m-2'>
            <h1 className='text-4xl p-2 m-2 border-b-2 border-gray-400'>Improve your Job Search</h1>
            <div className='pro_title p-5 px-8 flex items-center md:justify-around border-b-2 border-gray-400 rounded-md hover:bg-gray-200 cursor-pointer'>
              <div className='flex flex-col'>
                <h1 className='flex items-center pb-2 text-2xl'> Qualifications</h1>
                <h1 className='flex items-center text-xs text-gray-500'> Highlight your skills and experience.</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
            <div className='pro_title p-5 px-8 flex items-center md:justify-around border-b-2 border-gray-400 rounded-md hover:bg-gray-200 cursor-pointer'>
              <div className='flex flex-col'>
                <h1 className='flex items-center pb-2 text-2xl'> Job Preferences</h1>
                <h1 className='flex items-center text-xs text-gray-500'> Save a specific details like minimum desired pay ad schedule.</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
            <div className='pro_title p-5 px-8 flex items-center md:justify-around border-b-2 border-gray-400 rounded-md hover:bg-gray-200 cursor-pointer'>
              <div className='flex flex-col'>
                <h1 className='flex items-center pb-2 text-2xl'> Hide jbs with these details</h1>
                <h1 className='flex items-center text-xs text-gray-500'> Manage the qualifications or preferences used to hide jobs from your search.</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
            <div className='pro_title p-5 px-8 flex items-center md:justify-around border-b-2 border-gray-400 rounded-md hover:bg-gray-200 cursor-pointer'>
              <div className='flex flex-col'>
                <h1 className='flex items-center pb-2 text-2xl'> Ready to work</h1>
                <h1 className='flex items-center text-xs text-gray-500'> Let employers know that you're available to start working as soon as possible.</h1>
              </div>
              <div className='font-bold text-2xl'>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
