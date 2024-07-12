import React from 'react';
import employerLandingPageContent from './Data';
import { useNavigate } from 'react-router-dom';

const Employer = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black shadow-lg py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 lg:p-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">{employerLandingPageContent.hero.title}</h1>
            <p className="text-lg mb-6">{employerLandingPageContent.hero.subtitle}</p>
            <button onClick={()=>navigate('/post-job')} className="bg-blue-500 text-white py-2 px-6 rounded">{employerLandingPageContent.hero.cta}</button>
          </div>
          <div className="md:w-1/2">
            <img src={employerLandingPageContent.hero.image} alt="Hero" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {employerLandingPageContent.features.map((feature, index) => (
              <div key={index} className="p-2 pb-20 pt-10 bg-white rounded-lg shadow-lg">
                <img src={feature.icon} alt={feature.title} className="w-full h-2/3 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {employerLandingPageContent.benefits.map((benefit, index) => (
              <div key={index} className="p-2 pb-20 pt-10 bg-white rounded-lg shadow-lg">
                <img src={benefit.icon} alt={benefit.title} className="w-full h-2/3 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {employerLandingPageContent.testimonials.map((testimonial, index) => (
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
          <h2 className="text-4xl font-bold mb-4">{employerLandingPageContent.callToAction.title}</h2>
          <p className="text-lg mb-6">{employerLandingPageContent.callToAction.subtitle}</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded" onClick={()=>navigate('/auth')}>{employerLandingPageContent.callToAction.cta}</button>
        </div>
      </section>
    </div>
  );
};

export default Employer;
