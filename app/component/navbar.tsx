// "use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import { HomeRoundedIcon, SchoolRoundedIcon, CreateRoundedIcon, WorkRoundedIcon, PhoneRoundedIcon} from './iconify';
import { DarkModeBtn } from '../DarkMode';
import Loginform from './Loginform';
import { signOut, useSession } from 'next-auth/react';
import Keyword from './keywords';
// import { redirect } from 'next/navigation';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400','600','800','900'],
  });

const Navbar = () => {

  const { data: session } = useSession();
  console.log("navbar",session);

  /* -------------------------------------------------------------------------- */
/*                                for Loginform                               */
/* -------------------------------------------------------------------------- */
let count:Number = 1;

/* ---------------------- Collapse / Reopen Mobile Menu --------------------- */
  const [isMenuClicked, setIsMobMenu] = useState(true);

/* ------------------------- View Loginform on click ------------------------ */
  const [isLoginClicked, setLoginClicked] = useState(false);

const [isDropdownvisible, setDropdownvisible] = useState(false)

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
         {/* ----------------------- Profile button starts here -----------------------  */}

        
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
        
         {/* ----------------------- Profile button starts here -----------------------  */}

        {session?.user?.email == "" || session?.user?.email == undefined ? "" : <li>
        <div className="flex items-center md:order-2">
            <button type="button" onClick={() => {setDropdownvisible(!isDropdownvisible);}} className="flex mr-3 z-60 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            <div className={`absolute z-50 right-0 top-0 mt-14 me-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDropdownvisible ? "" : "hidden"}`} id="user-dropdown">
              <div className={`px-4 py-3 ${(session?.user?.email == undefined) || (session?.user?.email == "") ? "hidden" : ""}`}>
                <span className="flex text-sm text-gray-900 dark:text-white gap-2">{session.user.name}{session?.user?.role == "USER" ? <Keyword dictionary={["USER"]} btncolor={4}></Keyword> :""} </span>  
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
              </div> 
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                </li>
                <li>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </li> }

         {/* ----------------------- Profile button ends here -----------------------  */}

      </ul>
      
    </div>
          {/*-------------------------------------------------------------------------- */
          /*                          Mobile menu toggle button                         */
          /* -------------------------------------------------------------------------- */}
            <div className='block md:hidden inline-flex gap-2'>
          <span className="inline-flex items-center p-0 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-current="page"><DarkModeBtn></DarkModeBtn></span>
            {/* <button data-collapse-toggle="navbar-sticky" onClick={() => isMenuClicked == true ? setIsMobMenu(false):setIsMobMenu(true)} type="button" className="inline-flex items-center p-2 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="8" cy="13.5" r=".75"/></g></svg>
            </button> */}
            {session?.user?.email == "" || session?.user?.email == undefined ? <button onClick={() => (isLoginClicked == false) && (count == 1) ? setLoginClicked(true) : handleSetLoginClicked()} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="h-[9] mx-2 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 my-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg xmlns="http://www.w3.org/2000/svg" className="mx-1" width="18" height="18" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M1.625 12c0 .414.336.75.75.75h10.973l-1.961 1.68a.75.75 0 1 0 .976 1.14l3.5-3a.75.75 0 0 0 0-1.14l-3.5-3a.75.75 0 1 0-.976 1.14l1.96 1.68H2.376a.75.75 0 0 0-.75.75Z" clip-rule="evenodd"/><path d="M9.375 9.75h.378a2.25 2.25 0 0 1 3.586-2.458l3.5 3a2.25 2.25 0 0 1 0 3.416l-3.5 3a2.25 2.25 0 0 1-3.586-2.458h-.378V16c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h1c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.618 2 19.203 2 16.375 2h-1c-2.828 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121v1.75Z"/></g></svg><span className={`text-xs font-normal ${poppins.className}`}>Login</span></button> : "" } 

            {/* ----------------------- Profile button starts here -----------------------  */}
            {session?.user?.email == "" || session?.user?.email == undefined ? "" : <div className="flex items-center md:order-2">
            <button type="button" onClick={() => {setDropdownvisible(!isDropdownvisible);}} className="flex mr-3 z-60 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            <div className={`absolute z-50 right-0 top-0 mt-14 me-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDropdownvisible ? "" : "hidden"}`} id="user-dropdown">
              <div className={`px-4 py-3 ${(session?.user?.email == undefined) || (session?.user?.email == "") ? "hidden" : ""}`}>
                <span className="flex text-sm text-gray-900 dark:text-white gap-2">{session.user.name}{session?.user?.role == "USER" ? <Keyword dictionary={["USER"]} btncolor={4}></Keyword> :""} </span>  
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
              </div> 
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                </li>
                <li>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            
          </div> }
          {/* ----------------------- Profile button starts here -----------------------  */}
          
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