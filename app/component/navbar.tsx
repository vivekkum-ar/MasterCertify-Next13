// "use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import { HomeRoundedIcon, SchoolRoundedIcon, CreateRoundedIcon, WorkRoundedIcon, PhoneRoundedIcon, DarkModeIcon, LightModeIcon } from './iconify';
import { DarkModeBtn } from '../DarkMode';
import Loginform from './Loginform';
import { useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400','600','800','900'],
  });

const Navbar = () => {

  const { data: session } = useSession();
  // console.log("navbar",session);

  /* -------------------------------------------------------------------------- */
/*                                for Loginform                               */
/* -------------------------------------------------------------------------- */
let count:Number = 1;

/* ---------------------- Collapse / Reopen Mobile Menu --------------------- */
  const [isMenuClicked, setIsMobMenu] = useState(true);

/* ------------------------- View Loginform on click ------------------------ */
  const [isLoginClicked, setLoginClicked] = useState(false);

/* -------------- Handle SetLoginClick after firstSetLoginClick ------------- */
  function handleSetLoginClicked() {
    setLoginClicked(false);
    setTimeout(() => {
          setLoginClicked(true);
        }, 100);
      }
/* ----------------- Background fade Nav effect starts here ----------------- */
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /* ------------------ Background fade Nav effect ends here ------------------ */
  return (
    <>  
<nav className={`fixed w-full z-30 top-0 left-0 transition duration-500 ease-in-out ${isScrolled ? 'bg-white dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-600' : 'bg-inherit'}`}>
        <div className="h-16 md:h-20 flex grow items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center">
            <Image src="/images/M.svg" className="mr-3 rounded-full border-2 border-gray-500" width={55} height={55} alt="MasterCertify Logo" />
            <span className={`self-center lg:text-2xl sm:text-lg font-semibold text-gray-800 whitespace-nowrap dark:text-white ${poppins.className}`}>MasterCertify</span>
          </Link>
          <div className={`me-2 bg-inherit rounded-xl w-full md:w-auto md:block md:w-auto hidden md:block`}>
      <ul className={`items-center transition divide-y-2 md:divide-y-0 duration-500 ease-in-out font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isScrolled ? 'md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700' : "bg-inherit"}`}>
      <li>
          <span className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page"><DarkModeBtn></DarkModeBtn></span>
        </li>
        {/* HOME */}
        {/* <li>
          <Link href="/" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ HomeRoundedIcon} Home</Link>
        </li> */}
        <li>
          <Link href="/courses" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ SchoolRoundedIcon} Courses</Link>
        </li>
        <li>
          <Link href="/internships" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ WorkRoundedIcon} Internships</Link>
        </li>
        {/* CONTACT */}
        {/* <li>
          <Link href="/contact" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{PhoneRoundedIcon} Contact</Link>
        </li> */}
        <li>
          <Link href="/blogs" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{CreateRoundedIcon} Blogs</Link>
        </li>
        {session?.user?.email == "" || session?.user?.email == undefined ? <li>
        <button onClick={() => (isLoginClicked == false) && (count == 1) ? setLoginClicked(true) : handleSetLoginClicked()} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Login</button>
        </li> : ""} 
        {/* <li>
        <button onClick={() => (isLoginClicked == false) && (count == 1) ? setLoginClicked(true) : handleSetLoginClicked()} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Login</button>
        </li> */}

      </ul>
    </div>
          {/*-------------------------------------------------------------------------- */
          /*                          Mobile menu toggle button                         */
          /* -------------------------------------------------------------------------- */}
            <div className='block md:hidden inline-flex'>
          <span className="inline-flex items-center p-0 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-current="page"><DarkModeBtn></DarkModeBtn></span>
            <button data-collapse-toggle="navbar-sticky" onClick={() => isMenuClicked == true ? setIsMobMenu(false):setIsMobMenu(true)} type="button" className="inline-flex items-center p-2 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="8" cy="13.5" r=".75"/></g></svg>
            </button>
            {session?.user?.email == "" || session?.user?.email == undefined ? <button onClick={() => (isLoginClicked == false) && (count == 1) ? setLoginClicked(true) : handleSetLoginClicked()} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 my-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Login</button>
            : "" }
            </div>
        </div>
      </nav>
      <div className={`dark:bg-gray-700 fixed z-20 top-16 rounded-xl w-full md:w-auto bg-white animate__animated md:w-auto ${isMenuClicked == true ? "hidden animate__fadeOutUp" : "animate__fadeInDown"}`} id="navbar-default">
      <ul className={`transition divide-y-2 md:divide-y-0 duration-500 ease-in-out font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isScrolled ? 'md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700' : "bg-inherit"}`}>
        <li>
          <Link href="/" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ HomeRoundedIcon} Home</Link>
        </li>
        <li>
          <Link href="/courses" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ SchoolRoundedIcon} Courses</Link>
        </li>
        <li>
          <Link href="/internships" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ WorkRoundedIcon} Internships</Link>
        </li>
        <li>
          <Link href="/contact" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{PhoneRoundedIcon} Contact</Link>
        </li>
        <li>
          <Link href="/blogs" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{CreateRoundedIcon} Blogs</Link>
        </li>
      </ul>
    </div>
    {isLoginClicked && <Loginform></Loginform>}
    {/* {isSignupClicked && <Signupform></Signupform>} */}
    
    </>
  )
}

export default Navbar