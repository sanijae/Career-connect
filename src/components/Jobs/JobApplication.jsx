import React, { useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { sendNotification } from '../../utils/SendNotification';
import { useParams } from 'react-router-dom';
import { MdCheck, MdEmail, MdPerson } from 'react-icons/md';

export default function JobApplication (){
  const { id } = useParams();
  const jobId = id;
  const [coverLetter, setCoverLetter] = useState('');
  const [uploadCV, setUploadCV] = useState('');
  const [status, setStatus] = useState('');
  const [counter, setCounter] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      setStatus('Please log in to apply for the job.');
      return;
    }

    try {
      await addDoc(collection(db, 'applications'), {
        jobId,
        userId: user.uid,
        coverLetter,
        appliedAt: new Date(),
      });

      await sendNotification(user.uid, 'Your application has been submitted.');

      setStatus('Application submitted successfully!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };
 switch (counter){
  case 1:
    return <CVUpload 
    counter={counter} 
    setCounter={setCounter} 
    status={status} 
    uploadCV={uploadCV} 
    setUploadCV={setUploadCV} />
  case 2:
    return <CoverLetterComponent 
    counter={counter} 
    status={status} 
    setCounter={setCounter} 
    coverLetter={coverLetter} 
    setCoverLetter={setCoverLetter} />
  case 3:
    return <SubmitComponent 
    counter={counter} 
    setCounter={setCounter}
    status={status} 
    coverLetter={coverLetter} 
    uploadCV={uploadCV} 
    handleSubmit={handleSubmit}/>

  default:
    return <CoverLetterComponent 
    counter={counter} 
    status={status} 
    setCounter={setCounter} 
    coverLetter={coverLetter} 
    setCoverLetter={setCoverLetter} />
 }
}

export const NameComponent =(props)=>{
  const {counter,setCounter} = props
  return (
    <div className='flex items-center justify-center py-16 bg-white'>
      <div className='w-full lg:w-8/12 p-10 shadow-lg mt-10'>
        <div className='w-full mx-auto items-center'>
        <form className='flex flex-col'>
          <h1 className='text-xl font-bold w-full border-b-2 border-gray-400 shadow-md p-2'>Confirm your name</h1>
          <div className='p-1 mt-5 mb-5 bg-transparent flex items-center w-full shadow-md'>
            <MdPerson className='font-bold text-2xl'/>
            <h1 className='ml-2 p-2 text-xl'>John doe</h1>
          </div>
          <div className='p-1 bg-transparent flex items-center w-full shadow-md'>
            <MdEmail className='font-bold text-2xl'/>
            <h1 className='ml-2 p-2 text-xl'>johndoe@gmail.com</h1>
          </div>
          <div className="flex justify-between items-center mt-6">
                <div className="bg-blue-300 opacity-50 text-white py-2 px-4 rounded">Continue</div>
                <button type='button' onClick={()=>setCounter(counter + 1)} className="bg-gray-700 text-white py-2 px-4 rounded">Next</button>
              </div>
        </form>
        </div>
      </div>
    </div>
);
} 

export const CVUpload =(props)=>{
  const {counter,setCounter} = props
  return (
    <div className='flex items-center justify-center py-16 bg-white'>
      <div className='w-full lg:w-8/12 p-10  shadow-lg mt-10'>
        <div className='w-full mx-auto items-center'>
        <form className='flex flex-col'>
          <h1 className='text-xl font-bold w-full border-b-2 border-gray-400 shadow-md p-2'>Select Resume</h1>
          <div className='p-1 mt-5 mb-5 bg-transparent flex flex-col w-full shadow-md cursor-pointer hover:bg-gray-300'>
            <p className='p-2 text-xl'>Career Connect</p>
            <p className='p-2 text-xs text-gray-400'>Updated at: 20-01-2024</p>
            <p className='p-2 text-xs text-gray-400'>Uploaded at: 2-10-2022</p>
          </div>
          <div className='p-2 bg-transparent flex flex-col w-full shadow-md'>
            <p className='text-xl p-2'>Upload new resume</p>
            <input className='focus:outline-none bg-none p-2 hover:bg-gray-300' type='file'/>
          </div>
          <div className="flex justify-between items-center mt-6">
                <button type='button' onClick={()=>setCounter(counter - 1)} className="bg-blue-900 text-white py-2 px-4 rounded">Previous</button>
                <button type='button' onClick={()=>setCounter(counter + 1)} className="bg-gray-700 text-white py-2 px-4 rounded">Next</button>
              </div>
        </form>
        </div>
      </div>
    </div>
);
} 

export const CoverLetterComponent =(props)=>{
  const {counter,setCounter} = props
  return (
    <div className='flex items-center justify-center py-16 bg-white'>
      <div className='w-full lg:w-8/12 p-10  shadow-lg mt-10'>
        <div className='w-full mx-auto items-center'>
        <form className='flex flex-col'>
          <h1 className='text-xl font-bold w-full border-b-2 border-gray-400 shadow-md p-2'>Supporting document</h1>
          <div className='p-2 bg-transparent flex flex-col w-full shadow-md'>
            <p className='text-xl p-2'>Enter Letter</p>
            <textarea className='focus:outline-none bg-none p-2 hover:bg-gray-100 border-2 border-gray-400' rows={'6'}/>
          </div>
          <div className='p-2 bg-transparent flex flex-col w-full shadow-md'>
            <p className='text-xl p-2'>Upload Cover letter</p>
            <input className='focus:outline-none bg-none p-2 hover:bg-gray-300' type='file'/>
          </div>
          <div className="flex justify-between items-center mt-6">
                <button type='button' onClick={()=>setCounter(counter - 1)} className="bg-blue-900 text-white py-2 px-4 rounded">Previous</button>
                <button type='button' onClick={()=>setCounter(counter + 1)} className="bg-gray-700 text-white py-2 px-4 rounded">Next</button>
              </div>
        </form>
        </div>
      </div>
    </div>
);
} 

export const SubmitComponent =(props)=>{
  const {counter,setCounter} = props
  return (
    <div className='flex items-center justify-center py-16 bg-white'>
      <div className='w-full lg:w-8/12 p-10  shadow-lg mt-10'>
        <div className='w-full mx-auto items-center'>
        <form className='flex flex-col'>
          <h1 className='text-xl font-bold w-full border-b-2 border-gray-400 shadow-md p-2'>Submit your application</h1>
          <div className='flex flex-col mt-5 p-1 mb-5 shadow-md'>
            <p className='p-2 text-2xl'>Resume</p>
            <div className='bg-transparent flex flex-col w-full'>
              <div className='p-1 bg-transparent flex justify-between w-full shadow-md'>
                <p className='p-2 text-xl'>Career Connect</p>
                <MdCheck className='font-bold text-2xl'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-5 p-1 mb-5 shadow-md'>
            <p className='p-2 text-2xl'>Cover letter</p>
            <div className='bg-transparent flex flex-col w-full'>
              <div className='p-1 bg-transparent flex justify-between w-full shadow-md'>
                <p className='p-2 text-xl'>upload Connect</p>
                <MdCheck className='font-bold text-2xl'/>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
                <button type='button' onClick={()=>setCounter(counter - 1)} className="bg-blue-600 text-white py-2 px-4 rounded">Previous</button>
                <button type='button' onClick={()=>setCounter(counter - 1)} className="bg-blue-900 text-white py-2 px-4 rounded">Submit</button>
              </div>
        </form>
        </div>
      </div>
    </div>
);
} 