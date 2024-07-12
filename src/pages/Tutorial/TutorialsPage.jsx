import React from 'react';
import tutorials from './Tutorials';

const TutorialPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Tutorials</h1>
      <div className="space-y-8">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-2">{tutorial.title}</h2>
            <p className="text-gray-700">{tutorial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialPage;
