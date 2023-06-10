import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "400", "600", "800", "900"],
  });

  interface NeumorphcardProps {
    Title: string;
    Description: string;
  }
const Neumorphcard: React.FC<NeumorphcardProps> = (props) => {
    const { Title, Description } = props;
  return (
    <section className="newmorph ">
        <div className="grid grid-rows-3 sm:grid-rows-1 gap-y-0 px-5 sm:grid-cols-3 sm:gap-x-8">
        <div style={{backgroundImage:`url("/images/ill-certificate.svg")`}} className="bg-contain border-b-2 border-gray-400 sm:border-0 bg-no-repeat bg-bottom md:bg-top md:bg-cover row-span-1 sm:row-span-0 sm:col-span-1">
          </div>
        <div className="py-0 mx-auto max-w-screen-xl row-span-2 sm:row-span-0 sm:col-span-2">
          <div className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white rounded-xl md:my-4 py-4 md:p-4 px-2">
            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </a>
            <h1 className={`text-gray-900 dark:text-white text-xl md:text-4xl lg:text-5xl font-bold mb-2 ${poppins.className}`}>{Title}</h1>
            <p className="text-sm md:text-lg font-normal text-gray-700 dark:text-white mb-6">{Description}</p>
            <a href="#" className="flex sm:inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-gray-300 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Read more
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
          </div>
          
        </div>
      </section>
  )
}

export default Neumorphcard