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
    <section className="newmorph">
        <div className="grid grid-cols-3 gap-8">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4 col-span-2">
          <div className="bg-inherit dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-8 py-4 md:p-4">
            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </a>
            <h1 className={`text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2 ${poppins.className}`}>{Title}</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">{Description}</p>
            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Read more
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
          </div>
          <div style={{backgroundImage:`url("/images/ill-certificate.svg")`}} className="bg-cover">
          </div>
        </div>
      </section>
  )
}

export default Neumorphcard