"use Client"
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Poppins } from "next/font/google";
// import { postHandler } from '../api/register/route';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400','600','800','900'],
  });

  

interface SignupformProps {
  // Add your prop types here
  updateParentState:(newValue:boolean) => void;
  handleLoginSwitch:(newValue:boolean) => void;
}

const Signupform: React.FC<SignupformProps> = ({updateParentState, handleLoginSwitch}) => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  
  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    if(!Name || !Email || !Password){
      setError("All fields are necessary.");
    }
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          Email,
          Password,
        }),
      });
      
      if(res.ok){
        console.log("User Regged");
        
        // const form = e.currentTarget;
        // form.reset();
      }
      else{
        console.log(Name,Email,Password);
        console.log("User Reg Failed");
      }
      }
    catch (error) {
      console.log("ERROR User Reg",error);
      
    }
  }

  const handleCloseClick = () => { 
    // Call the function passed from the parent component
    updateParentState(false);
  };
  const handleSwitchToLogin = () => {
    // Call the function passed from the parent component
    handleLoginSwitch(false);
  };
  return (
    <>
        {/* -------------------------------------------------------------------------- */
      /*                                 MAIN MODAL                                 */
      /* -------------------------------------------------------------------------- */}
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 shadow-gray-950">
            <button  type="button" onClick={() => handleCloseClick()} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className={`mb-4 text-2xl text-gray-900 dark:text-white font-bold ${poppins.className}`}>Signup to our platform</h3>
              { /* -------------------------------------------------------------------------- */
                /*                               Top Error                                    */
                /* -------------------------------------------------------------------------- */}
          {Error && <div id="alert-border-2" className={`flex items-center p-2 mb-2 text-red-800 border-s-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800 rounded-lg ${Error === "" ? "hidden":""} `} role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ml-3 text-sm font-sm ">
              {Error}
            </div>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-2" aria-label="Close">
              <span className="sr-only">Dismiss</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>}
              <form className="space-y-6" action="#">
              <div>
                  <label htmlFor="name" className={`after:content-['*'] after:text-red-500 after:ms-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white ${poppins.className}`}>Your name</label>
                  <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                   {/* -------------------------------------------------------------------------- */
                  /*                               Error messages                               */
                  /* --------------------------------------------------------------------------  */}
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500 peer-valid:block peer-invalid:hidden peer-placeholder-shown:!hidden"><span className="font-medium">Well done!</span> Some success message.</p>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 peer-valid:hidden peer-invalid:block peer-placeholder-shown:!hidden"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
                </div>
                <div>
                  <label htmlFor="email" className={`after:content-['*'] after:text-red-500 after:ms-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white ${poppins.className}`}>Your email</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                   {/* -------------------------------------------------------------------------- */
                  /*                               Error messages                               */
                  /* --------------------------------------------------------------------------  */}
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500 peer-valid:block peer-invalid:hidden peer-placeholder-shown:!hidden"><span className="font-medium">Well done!</span> Some success message.</p>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 peer-valid:hidden peer-invalid:block peer-placeholder-shown:!hidden"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
                </div>
                <div>
                  <label htmlFor="password" className={`after:content-['*'] after:text-red-500 after:ms-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white ${poppins.className}`}>Your password</label>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                   {/* -------------------------------------------------------------------------- */
                  /*                               Error messages                               */
                  /* --------------------------------------------------------------------------  */}
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500 peer-valid:block peer-invalid:hidden peer-placeholder-shown:!hidden"><span className="font-medium">Well done!</span> Some success message.</p>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 peer-valid:hidden peer-invalid:block peer-placeholder-shown:!hidden"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
                </div>
                <button type="submit" onClick={handleSubmit} className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${poppins.className}`}>Signup to your account</button>
                <div className={`text-sm font-medium text-gray-500 dark:text-gray-300 ${poppins.className}`}>
                  Already have an account? <a href="#" onClick={() => handleSwitchToLogin()} className={`text-blue-700 hover:underline dark:text-blue-500 ${poppins.className} `}>Login</a>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default Signupform