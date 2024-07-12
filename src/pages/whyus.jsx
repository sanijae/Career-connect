import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <> 
      {/* <Navbar  navColor={'rgba(0,0,0,.4)'} /> */}
      <div className="index-container">
        <header className="text-white py-16 mt-14 m-20">
          <div className="container mx-auto text-center py-16">
            <h1 className="text-4xl font-bold">Welcome to JobPortal</h1>
            <p className="mt-4 text-lg">Find your dream job with us</p>
            <div className="mt-6">
              <a href="/signup" className="bg-white text-blue-600 py-4 px-4 rounded-md hover:bg-gray-200">Get Started</a>
            </div>
          </div>
        </header>

        <section className="bg-gray-50 py-16 text-blue-900">
          <div className="container-fluid flex justify-center flex-col">
            <h2 className="text-3xl font-bold w-full text-center m-10">Why Choose Us?</h2>
            <div className="bg-white py-16 m-2 shadow-lg flex items-center flex-wrap justify-center text-blue-900">
              <div className="w-full md:w-1/2 p-16 sm:text-center sm:my-2">
                <div className="rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Wide Range of Jobs</h3>
                  <p>Explore thousands of job opportunities across industries.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="p-6 rounded-lg">
                  <img src={require('../../Asset/Icons/undraw_Job_hunt_re_q203.png')} alt="Wide Range of Jobs" />
                </div>
              </div>
            </div>

            <div className="bg-white py-16 m-2 shadow-lg flex md:flex-row-reverse items-center flex-wrap justify-center text-blue-900">
              <div className="w-full md:w-1/2 p-16 sm:text-center sm:my-2">
                <div className="bg-white rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                  <p>Our platform is user-friendly and easy to navigate.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="rounded-lg">
                  <img src={require('../../Asset/Icons/undraw_remotely_2j6y.png')} alt="Easy to Use" />
                </div>
              </div>
            </div>

            <div className="bg-white py-16 m-2 shadow-lg flex items-center flex-wrap justify-center text-blue-900">
              <div className="w-full md:w-1/2 p-16 sm:text-center sm:my-2">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                  <p>Your personal information is safe with us.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2  p-4">
                <div className="p-6 rounded-lg">
                  <img src={require('../../Asset/Icons/undraw_two_factor_authentication_namy.png')} alt="Secure & Reliable" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
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
      </div>
    </>
  );
};

export default Home;
