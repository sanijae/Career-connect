import React from 'react';
import landingPageContent from './Data';
import { useNavigate } from 'react-router-dom';

const JobSeeker = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-20 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-10 justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">{landingPageContent.hero.title}</h1>
            <p className="text-lg mb-6">{landingPageContent.hero.subtitle}</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded" onClick={()=>navigate('/auth')}>{landingPageContent.hero.cta}</button>
          </div>
          <div className="md:w-1/2">
            <img src={landingPageContent.hero.image} alt="Hero" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {landingPageContent.features.map((feature, index) => (
              <div key={index} className="p-2 pt-10 pb-20 bg-white rounded-lg shadow-lg">
                <img src={feature.icon} alt={feature.title} className="w-full h-2/3 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
       <section className="bg-gray-200 py-16">
          <div className="container-fluid mx-auto text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <div className="mt-8 flex flex-wrap justify-center items-center ">
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">1. Sign Up</h3>
                  <p>Create an account to get started.</p>
                  <div>
                    <img alt='Sign up' src={require('../../Asset/Icons/undraw_Sign_up_n6im.png')} />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">2. Search Jobs</h3>
                  <p>Browse through our extensive job listings.</p>
                  <div>
                    <img alt='Sign up' src={require('../../Asset/Icons/undraw_Search_re_x5gq.png')} />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">3. Apply</h3>
                  <p>Submit your application and get hired.</p>
                  <div>
                    <img alt='Sign up' src={require('../../Asset/Icons/undraw_applications_v8mb.png')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Testimonials Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {landingPageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.title} at {testimonial.company}</p>
                <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{landingPageContent.callToAction.title}</h2>
          <p className="text-lg mb-6">{landingPageContent.callToAction.subtitle}</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded" onClick={()=>navigate('/auth')}>{landingPageContent.callToAction.cta}</button>
        </div>
      </section>
    </div>
  );
};

export default JobSeeker;
