import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">JobPortal</h3>
            <p>Your one-stop solution for finding your dream job.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">Navigation</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about-us" className="hover:text-gray-200">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contacts" className="hover:text-gray-200">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">Useful links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/employer" className="hover:text-gray-200">Create Jobs</Link>
              </li>
              <li className="mb-2">
                <Link to="/employer" className="hover:text-gray-200">Employers</Link>
              </li>
              <li className="mb-2">
                <Link to="/job-seeker" className="hover:text-gray-200">Job seeker</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/privacy-policy" className="hover:text-gray-200">Privacy policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/term-of-services" className="hover:text-gray-200">Term of services</Link>
              </li>
              <li className="mb-2">
                <Link to="/community-guidelines" className="hover:text-gray-200">Community guidelines</Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="hover:text-gray-200">FAQS</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: support@jobportal.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Job St, Work City, WC 12345</p>
          </div> */}

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54v-2.89h2.54V9.845c0-2.513 1.492-3.89 3.775-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.244 0-1.63.775-1.63 1.566V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6.003c-.798.354-1.655.592-2.557.699a4.478 4.478 0 001.958-2.48 8.983 8.983 0 01-2.848 1.092 4.468 4.468 0 00-7.616 4.073A12.692 12.692 0 013.221 5.2a4.469 4.469 0 001.385 5.96A4.455 4.455 0 012.8 10.41v.055a4.469 4.469 0 003.584 4.377 4.49 4.49 0 01-2.019.077 4.471 4.471 0 004.165 3.094 8.957 8.957 0 01-5.546 1.916 8.975 8.975 0 01-1.066-.062A12.63 12.63 0 006.89 21c8.183 0 12.65-6.779 12.65-12.65 0-.193-.004-.384-.013-.573a9.04 9.04 0 002.217-2.294l.004-.005z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.73a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.44 20.45h-3.56v-5.56c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.13 1.45-2.13 2.94v5.65H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.56v6.17z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-4 text-center">
          <p>&copy; 2024 Career Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
