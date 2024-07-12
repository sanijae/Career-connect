import React, {  useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { IoIosArrowForward} from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Navbar.css';

const Navbar = ({bgColor,navColor}) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const [user, setUser] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav p-4 pb-0" style={{backgroundColor: bgColor}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-end">
          <div className='text-white text-lg font-bold flex items-center p-5 pl-1 pr-1'>
            <Link to="/">Career Connect</Link>
          </div>
          <div className='flex items-center ml-2 bg-white text-sm p-5 text-blue-950'>
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/employer" className=" hover:text-blue-400 ml-2 cursor-pointer">Post Jobs</Link>
          </div>
        </div>
        <div className=''>
          {user ? 
            <div className={` flex text-white items-center ${showMenu ? 'show' : ''}`}>
              {!isMobile && 
              <>
                <Link  to="/profile" className='p-1 text-xl ml-2 mr-2'><FaUser size={'1em'}/></Link>
                <div className='text-xl font-bold text-white mr-2 ml-2'>|</div>
              </>}
              <CgMenuRight  className='text-2xl font-bold text-white cursor-pointer' onClick={handleMenuClick} />
            </div>
            :
            <div className={`flex items-center`}>
              {!isMobile && <>
                <Link  to="/auth" className="text-sm mr-3 p-2 bg-white text-gray-900 font-bold">Sign in</Link>
                <div className='text-xl font-bold text-white mr-2 ml-2'>|</div>
              </>}
              <CgMenuRight className='text-2xl font-bold text-white cursor-pointer' onClick={handleMenuClick} />
            </div>
            }
        </div>
        <div className={`navbar ${showMenu ? 'show' : ''}`}>
          <div className='close bg-white flex justify-end p-3 text-3xl text-gray-800 hover:text-gray-950' onClick={handleMenuClick}>
            <MdClose/>
          </div>
          <div className='nav-content bg-white p-1 m-1 flex flex-col' onClick={handleMenuClick}>
            <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/profile')}>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl'>Profile</h1>
                <IoIosArrowForward size={'1.5em'}/>
              </div>
            </div>
            <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/company-reviews')}>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl'>Company reviews</h1>
                <IoIosArrowForward size={'1.5em'}/>
              </div>
            </div>
             {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>My reviews</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
            {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/messages')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Message</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
             {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/my-jobs')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>My jobs</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
              {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/saved-jobs')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Saved jobs</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
             {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/account-setting')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Settings</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
              <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/Help-center')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Employer</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>
              <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/Help-center')}>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Job Seeker</h1>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>
             {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer' onClick={()=>navigate('/auth')}>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-xl'>Sign In</h1>
                  </div>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
              {user && <div className='flex flex-col p-5  border-b-2 border-gray-400 shadow-md hover:bg-gray-200 cursor-pointer'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-xl'>Sign out</h1>
                    <p className='text-gray-300 text-xs'>johndoe@email.com</p>
                  </div>
                  <IoIosArrowForward size={'1.5em'}/>
                </div>
              </div>}
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
