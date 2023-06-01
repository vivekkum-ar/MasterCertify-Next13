import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import { HomeRoundedIcon, SchoolRoundedIcon, CreateRoundedIcon, WorkRoundedIcon, PhoneRoundedIcon } from './iconify';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400','600','800','900'],
  });

const Navbar = () => {

/* ---------------------- Collapse / Reopen Mobile Menu --------------------- */
  const [isMenuClicked, setIsMobMenu] = useState(true);


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
    <nav className={`fixed w-full z-20 top-0 left-0 transition duration-500 ease-in-out ${isScrolled ? 'bg-white dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-600' : 'bg-inherit'}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center">
            <Image src="/images/M.svg" className="mr-3 rounded-full border-2 border-gray-500" width={55} height={55} alt="MasterCertify Logo" />
            <span className={`self-center lg:text-2xl sm:text-lg font-semibold text-gray-800 whitespace-nowrap dark:text-white ${poppins.className}`}>MasterCertify</span>
          </Link>

          {/*-------------------------------------------------------------------------- */
          /*                          Mobile menu toggle button                         */
          /* -------------------------------------------------------------------------- */}
            <button data-collapse-toggle="navbar-sticky" onClick={() => isMenuClicked == true ? setIsMobMenu(false):setIsMobMenu(true)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          
        </div>
        <div className={`rounded-xl mx-4 bg-white animate__animated md:block md:w-auto ${isMenuClicked == true ? "hidden animate__fadeOutUp" : "animate__fadeInDown"}`} id="navbar-default">
            <ul className={`transition divide-y-2 duration-500 ease-in-out font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isScrolled ? 'md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700' : "bg-inherit"}`}>
              <li>
                <Link href="/" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ HomeRoundedIcon} Home</Link>
              </li>
              <li>
                <Link href="/courses" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ SchoolRoundedIcon} Courses</Link>
              </li>
              <li>
                <Link href="/internships" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none" aria-current="page">{ WorkRoundedIcon} Internships</Link>
              </li>
              {/* <li>
                <Link href="/courses">
              <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="100" data-dropdown-trigger="hover" className="flex items-center justify-between w-full px-4 hover:bg-gray-100 focus:bg-gray-100 md:hover:bg-transparent md:focus:bg-transparent md:border-0 md:hover:text-blue-700 md:focus:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:focus:text-blue-500 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:focus:bg-transparent" type="button">{SchoolRoundedIcon} Courses <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              </Link>
                </li> */}
                {/* <li>
                  <Link href="/internships">
              <button id="dropdownDelayButton2" data-dropdown-toggle="dropdownDelay2" data-dropdown-delay="100" data-dropdown-trigger="hover" className="flex items-center justify-between w-full px-4 hover:bg-gray-100 focus:bg-gray-100 md:hover:bg-transparent md:focus:bg-transparent md:border-0 md:hover:text-blue-700 md:focus:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:focus:text-blue-500 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:focus:bg-transparent" type="button">{WorkRoundedIcon} Internships <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              </Link>
                </li> */}
              <li>
                <Link href="/contact" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{PhoneRoundedIcon} Contact</Link>
              </li>
              <li>
                <Link href="/blogs" className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-gray-100 md:focus:bg-transparent focus:text-blue-700 md:focus:text-blue-700 focus:outline-none">{CreateRoundedIcon} Blogs</Link>
              </li>

            </ul>
          </div>

        {/* <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"> */}
        <div id="dropdownDelay" className="hidden border-gray-300 border-2 shadow-lg rounded-lg bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="justify-end grid max-w-lg px-4 mr-0 py-5 text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">111111111111</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="dropdownDelay2" className="hidden border-gray-300 border-2 shadow-lg rounded-lg bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="justify-end grid max-w-lg px-4 mr-0 py-5 text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">2222222222</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar