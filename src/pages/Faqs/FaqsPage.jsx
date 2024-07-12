import React from 'react';
import faqs from './Faqs';

const FAQPage = () => {
  return (
    <div className='flex justify-center'>
      <div className="container mx-auto py-20 px-4 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded p-6">
              <h2 className="text-2xl font-bold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
