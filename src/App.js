import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostJob from './components/Jobs/PostJob';
import JobListings from './components/Jobs/JobListings';
import Profile from './components/Profile/Profile';
import JobDetails from './components/Jobs/JobDetails';
import ViewApplications from './components/Jobs/ViewApplications';
import Notifications from './components/Notification/Notifications';
import ForgotPassword from './components/Profile/ForgotPassword';
import UpdateEmail from './components/Profile/UpdateEmail';
import UpdateProfileImage from './components/Profile/UpdateProfileImage';
import UpdateProfileInfo from './components/Profile/UpdateProfileInfo';
import Signup from './components/Auth/SignUp';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import JobApplication from './components/Jobs/JobApplication';
import Footer from './components/Footer/Footer';
// import CreateJob from './components/Jobs/CreateJob';
import Settings from './components/Profile/Settings';
import Messages from './components/Notification/Messages';
import CompanyReviews from './components/Review/CompanyReview';
import JobsApplied from './components/Jobs/JobsApplied';
import SavedJobs from './components/Jobs/SavedJobs';
import PrivacyPolicyPage from './pages/Privacy/PrivacyPolicy';
import TermsOfService from './pages/Term_Services/TermOfServices';
import CommunityGuidelinesPage from './pages/Guide/Guides';
import FAQPage from './pages/Faqs/FaqsPage';
import TutorialPage from './pages/Tutorial/TutorialsPage';
import Contacts from './pages/Contacts/Contacts';
import AboutUsPage from './pages/About/AboutUsPage';
import Employer from './components/Employer/Employer';
import JobSeeker from './components/JobSeeker/JobSeeker';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='pt-20'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path="/Jobs" Component={JobListings} />
          <Route path="/auth" Component={Signup} />
          <Route path="/post-job" Component={PostJob} />
          <Route path="/profile" Component={Profile} />
          <Route path="/job/:id" Component={JobDetails} />
          <Route path="/apply/:jobId" Component={JobApplication} />
          <Route path="/applications/:jobId" Component={ViewApplications} />
          <Route path="/notifications" Component={Notifications} />
          <Route path="/messages" Component={Messages} />
          <Route path="/employer" Component={Employer} />
          <Route path="/job-seeker" Component={JobSeeker} />
          <Route path="/account-setting" Component={Settings} />
          <Route path="/about-us" Component={AboutUsPage} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="/faqs" Component={FAQPage} />
          <Route path="/tutorial" Component={TutorialPage} />
          <Route path="/privacy-policy" Component={PrivacyPolicyPage} />
          <Route path="/term-of-services" Component={TermsOfService} />
          <Route path="/community-guidelines" Component={CommunityGuidelinesPage} />
          <Route path="/my-jobs" Component={JobsApplied} />
          <Route path="/saved-jobs" Component={SavedJobs} />
          <Route path="/company-reviews" Component={CompanyReviews} />
          <Route path="/forgot-password" Component={ForgotPassword} />
          <Route path="/update-email" Component={UpdateEmail} />
          <Route path="/update-profile-image" Component={UpdateProfileImage} />
          <Route path="/update-user-profile" Component={UpdateProfileInfo} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
