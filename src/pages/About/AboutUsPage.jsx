import React from 'react';

const AboutUsPage = () => {
  return (
    <div className='flex justify-center'>
      <div className="container mx-auto px-4 py-16 lg:w-1/2 w-full">
        <div className="text-center shadow-lg p-4">
          <h1 className="text-4xl font-bold mb-4 border-gray-400 border-b-2 p-2">About Career Connect</h1>
          <p className="text-lg text-gray-700 mb-8">
            At Career Connect, we believe in creating opportunities and fostering connections that enable individuals and organizations to thrive. Our platform is designed to bring job seekers and employers together, creating a seamless and efficient hiring process.
          </p>
        </div>
        
        <section className="my-8 shadow-lg p-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to empower job seekers by providing them with the resources, tools, and connections they need to achieve their career goals. We strive to create a user-friendly platform that simplifies the job search process and enhances the experience for both job seekers and employers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are committed to promoting equal opportunities and ensuring that every user, regardless of their background, has access to the best job opportunities. Through innovation, technology, and a dedicated support team, we aim to bridge the gap between talent and opportunity.
          </p>
        </section>
        
        <section className="my-8 shadow-lg p-4">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our vision is to be the leading job portal that connects millions of job seekers and employers worldwide. We envision a future where finding the perfect job or the ideal candidate is effortless and intuitive. By continuously improving our platform and expanding our services, we aspire to set new standards in the recruitment industry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We aim to create a global community where talent meets opportunity without barriers. Our vision includes leveraging the latest technologies, such as AI and machine learning, to provide personalized job recommendations and insights that help our users make informed career decisions.
          </p>
        </section>
        
        <section className="my-8 shadow-lg p-4">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li className="mb-2"><strong>Integrity:</strong> We conduct our business with the highest ethical standards and honesty.</li>
            <li className="mb-2"><strong>Innovation:</strong> We embrace change and continuously seek ways to improve our platform and services.</li>
            <li className="mb-2"><strong>Inclusivity:</strong> We celebrate diversity and strive to create an inclusive environment for all our users.</li>
            <li className="mb-2"><strong>Customer-Centric:</strong> Our users are at the heart of everything we do. We prioritize their needs and work tirelessly to exceed their expectations.</li>
            <li className="mb-2"><strong>Collaboration:</strong> We believe in the power of teamwork and work collaboratively with our partners and users to achieve our goals.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
