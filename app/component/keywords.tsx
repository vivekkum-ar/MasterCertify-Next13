import React from 'react';

const buttonClassNames = [
    "rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-xs px-2 py-0.5 text-center mr-1 mb-0.5",
    // Add more class names here if needed
  ];
const applyClassNamesToButtons = (dictionary: string[]) => {
    // Generate a random number between 0 (inclusive) and max (exclusive)
  return dictionary.map((akey, index) => (
    <button key={index} className={buttonClassNames[Math.floor(Math.random() * buttonClassNames.length)]} type="button">
      {/* Content for the button */}
      {akey}
    </button>
  ));
};

interface KeywordComponentProps{
    dictionary: string[];  //Optional prop using ?
  }

const Keyword: React.FC<KeywordComponentProps> = ({dictionary = []}) => {

  return (
    <div className="md:max-w-md max-w-xs">
      {applyClassNamesToButtons(dictionary)}
    </div>
  );
};

export default Keyword;

