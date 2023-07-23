"use Client"
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import { useRouter } from 'next/navigation';
import { Console } from 'console';
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

  const [spinnerVisible,setSpinnerVisible] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    setSpinnerVisible(true);
    if(!Name || !Email || !Password){
      setError("All fields are necessary.");
      setSpinnerVisible(false);
    }
    else{
      try {

        const resUserExists = await fetch("api/userExists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email })
        });
  
        const { user } = await resUserExists.json();
  
        if (user) {
          setError("User already exists.");
          setSpinnerVisible(false);
          return;
        }
  
  
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
          handleCloseClick();
          router.push("/"); 
        }
        else{
          console.log(Name,Email,Password);
          console.log("User Reg Failed");
          setSpinnerVisible(false);
        }
        }
      catch (error) {
        console.log("ERROR User Reg",error);
        setSpinnerVisible(false);
      }
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
              <form className="space-y-6">
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
                  <input onChange={(e) => {setEmail(e.target.value);
                  console.log(Email)}} type="email" name="email" id="email" className="peer invalid:border-red-500 border-2 bg-gray-50 border valid:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
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
                {/* <button onClick={handleSubmit} className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${poppins.className}`}>Signup to your account</button> */}
            <button onClick={handleSubmit} className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${poppins.className}`}>
              <svg aria-hidden="true" role="status" className={`${spinnerVisible == true ? "" : "hidden"} inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              {spinnerVisible == true ? "Loading ..." : "Signup to your account"}
            </button>
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