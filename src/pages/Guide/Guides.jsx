import React from 'react';
import communityGuidelinesContent from './Guide';

const CommunityGuidelinesPage = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="prose max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{communityGuidelinesContent.title}</h1>

        {communityGuidelinesContent.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            
            {section.subSections ? (
              <div className='shadow-lg p-4'>
                {section.subSections.map((subSection, idx) => (
                  <div key={idx} className="mb-4 shadow-lg p-4">
                    <h3 className="text-xl font-bold mb-2">{subSection.title}</h3>
                    <p className="text-gray-700">{subSection.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 shadow-lg p-4">{section.content}</p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default CommunityGuidelinesPage;
