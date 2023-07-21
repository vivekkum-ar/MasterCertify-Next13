import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import "animate.css";
import { gsap } from 'gsap';
import Signupform from './Signupform';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400','600','800','900'],
  });


interface LoginformProps {
  // Add your prop types here
}

const Loginform: React.FC<LoginformProps> = ({}) => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      // add a media query. When it matches, the associated function will run
  // mm.add("(min-width: 768px)", () => {
      // all your GSAP animation code here
      gsap.from(".bounceInDown", {
        y: "-200%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
  // });
});
});



    /* --------------------- Track visibility of login form --------------------- */
    const [isVisible,setIsVisible] = useState(true);
    const [isSignup,setIsSignup] = useState(false);
  
    
      // This function will be passed to the child component
  const updateParentState = (newValue:boolean) => {
    setIsVisible(newValue);
    console.log(newValue);
  };

        // This function will be passed to the child component
  const handleLoginSwitch = (newValue:boolean) => {
    setIsSignup(newValue);
    console.log(newValue);
  };
    /* -------------------- Stop scrolling if form is visible ------------------- */
    useEffect(() => {
        if (isVisible) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isVisible]);

  return (
    <>
        {/* -------------------------------------------------------------------------- */
      /*                                 MAIN MODAL                                 */
      /* -------------------------------------------------------------------------- */}
      <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className={`grid fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-100 h-screen max-h-full ${(isVisible == true) ? "block" : "hidden"} backdrop-blur-lg bg-opacity-50 backdrop-filter border border-opacity-20 border-white bounceInDown`}>
        <div className="relative w-full max-w-md max-h-full justify-self-center self-center">
          {/* Modal content */}
          <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700 shadow-gray-950 ${isSignup ? "hidden":"block"}`}>
            <button onClick={() => setIsVisible(false) } type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className={`mb-4 text-2xl text-gray-900 dark:text-white font-bold ${poppins.className}`}>Login to our platform</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="email" className={`after:content-['*'] after:text-red-500 after:ms-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white ${poppins.className}`}>Your email</label>
                  <input type="email" name="email" id="email" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                   {/* -------------------------------------------------------------------------- */
                  /*                               Error messages                               */
                  /* --------------------------------------------------------------------------  */}
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500 peer-valid:block peer-invalid:hidden peer-placeholder-shown:!hidden"><span className="font-medium">Well done!</span> Some success message.</p>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 peer-valid:hidden peer-invalid:block peer-placeholder-shown:!hidden"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
                </div>
                <div>
                  <label htmlFor="password" className={`after:content-['*'] after:text-red-500 after:ms-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white ${poppins.className}`}>Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                   {/* -------------------------------------------------------------------------- */
                  /*                               Error messages                               */
                  /* --------------------------------------------------------------------------  */}
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500 peer-valid:block peer-invalid:hidden peer-placeholder-shown:!hidden"><span className="font-medium">Well done!</span> Some success message.</p>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 peer-valid:hidden peer-invalid:block peer-placeholder-shown:!hidden"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label htmlFor="remember" className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${poppins.className}`}>Remember me</label>
                  </div>
                  <a href="#" className={`text-sm text-blue-700 hover:underline dark:text-blue-500 ${poppins.className}`}>Forgot Password?</a>
                </div>
                <button type="submit" className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${poppins.className}`}>Login to your account</button>
                <div onClick={() => setIsSignup(true)} className={`text-sm font-medium text-gray-500 dark:text-gray-300 ${poppins.className}`}>
                  Not registered? <a href="#"  className={`text-blue-700 hover:underline dark:text-blue-500 ${poppins.className}`}>Create account</a>
                </div>
              </form>
            </div>
          </div>
          {isSignup && <Signupform updateParentState={updateParentState} handleLoginSwitch={handleLoginSwitch}></Signupform>}
        </div>
      </div>
    </>
  )
}

export default Loginform