import React from 'react';

function Filter() {

  return (
    <div className='filter fixed top-16 left-0 md:left'>
      <div className='flex flex-col p-2 m-2 bg-white shadow-lg'>
        <div className='mb-1 mt-1 p-2 bg-white border-b-2 rounded-sm shadow-sm flex flex-col'>
          <input className='bg-white mb-1 p-4 border-none w-full rounded-sm' type='text' placeholder='Job title, Keyword, Company' />
          <button style={{backgroundColor:'#1e0448'}} className='p-4 bg-blue-800 text-white rounded-md cursor-pointer text-sm w-full'>Search</button>
        </div>
        {/* <div className='mb-1 mt-1 p-2 bg-gray-200 border-b-2 rounded-sm shadow-sm flex flex-col'>
          <input className='bg-white mb-1 p-4 border-none w-full rounded-sm' type='text' placeholder='Company' />
          <button style={{backgroundColor:'#1e0448'}} className='p-4 bg-blue-800 text-white rounded-md cursor-pointer text-sm w-full'>Search</button>
        </div>
        <div className='mb-1 mt-1 p-2 bg-gray-200 border-b-2 rounded-sm shadow-sm flex flex-col'>
          <input className='bg-white mb-1 p-4 border-none w-full rounded-sm' type='text' placeholder='Keyword' />
          <button style={{backgroundColor:'#1e0448'}} className='p-4 bg-blue-800 text-white rounded-md cursor-pointer text-sm w-full'>Search</button>
        </div> */}
        <div className='mb-1 mt-1 p-2 bg-white border-b-2 rounded-sm shadow-sm flex flex-col'>
          <input className='bg-white mb-1 p-4 border-none w-full rounded-sm' type='text' placeholder='City or Country' />
          <button style={{backgroundColor:'#1e0448'}} className='p-4 bg-blue-800 text-white rounded-md cursor-pointer text-sm w-full'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
