import React from 'react';
import contactUsContent from './Contact';

const ContactUsPage = () => {
  return (
    <div className='flex justify-center'>
      <div className="container mx-auto py-20 px-4 w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-center mb-6">{contactUsContent.title}</h1>
        <p className="text-lg text-center mb-10">{contactUsContent.description}</p>
        <div className="bg-white shadow-md rounded p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg mb-2"><strong>Address:</strong> {contactUsContent.address}</p>
          <p className="text-lg mb-2"><strong>Email:</strong> <a href={`mailto:${contactUsContent.email}`} className="text-blue-600">{contactUsContent.email}</a></p>
          <p className="text-lg mb-2"><strong>Phone:</strong> {contactUsContent.phone}</p>
        </div>
        <div className="bg-white shadow-lg rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
