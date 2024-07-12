import React, { useState } from 'react';
import { auth } from '../../utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({email:'',password:'',name:''});
  const [isSign,setIsSign] = useState(true)

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      alert('User registered successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='py-20'>
      <div className='md:p-10 flex flex-wrap justify-center items-center w-full bg-gray-100'>
        <div className='bg-white rounded py-16 m-2 shadow-lg flex items-center flex-wrap justify-center text-blue-900'>
          <div className='w-full md:w-1/2 p-4'>
            <img alt='Join us' src={require('../../Asset/Icons/undraw_welcome_cats_thqn.png')}/>
          </div>
          <div className='w-full md:w-1/2 p-10'>
            <form className='flex flex-col items-start' onSubmit={handleSignup}>
              {isSign ?
                 <h1 className='text-4xl m-2 p-3 w-full'>Login to your account</h1>
                 :
                 <h1 className='text-4xl m-2 p-3 w-full'>Create an account</h1>
              }
              {!isSign && <input className='m-2 bg-gray-300 rounded-lg p-3 text-gray-900 text-xl w-full' type="email" value={user.name} onChange={(e) => setUser({...user,name: e.target.value})} placeholder="Enter your name" />}
              <input className='m-2 bg-gray-300 rounded-lg p-3 text-gray-900 text-xl w-full' type="email" value={user.email} onChange={(e) => setUser({...user,email: e.target.value})} placeholder="Email" />
              <input className='m-2 bg-gray-300 rounded-lg p-3 text-gray-900 text-xl w-full' type="password" value={user.password} onChange={(e) => setUser({...user,password: e.target.value})} placeholder="Password" />
              {isSign ?
                <>
                  <button className='bg-blue-700 p-3 m-2 rounded-lg text-xl text-white font-bold w-full' type="submit">Login</button>
                  <p className='p-2 text-xl'>Don't have an account <Link onClick={()=>setIsSign(!isSign)} className='bg-blue-800 text-white p-1'>Register here</Link></p>
                </>
                :
                <>
                  <button className='bg-blue-700 p-3 m-2 rounded-lg text-xl text-white font-bold w-full' type="submit">Register</button>
                  <p className='p-2 text-xl'>Already have an account <Link onClick={()=>setIsSign(!isSign)} className='bg-blue-800 text-white p-1'>Login here</Link></p>
                </>
              }
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
