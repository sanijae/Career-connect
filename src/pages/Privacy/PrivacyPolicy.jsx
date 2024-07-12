import React from 'react';
import privacyPolicyContent from './Privacy';

const PrivacyPolicyPage = () => {
  return (
    <div className='flex justify-center'>
      <div className="container mx-auto py-20 px-4 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-8">{privacyPolicyContent.title}</h1>
        
        {privacyPolicyContent.sections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            {section.subSections ? (
              <div>
                {section.subSections.map((subSection, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{subSection.title}</h3>
                    <p className="text-gray-700">{subSection.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
