import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import CarbonQuotes from './iconify';
import "animate.css";
import Gridcard from './grid_card';


const Carousel1 = () => {
  const [slide, setSlide] = useState(0)
  return (
  <>
  {/* ------------------------------- Wrapper div ------------------------------  */}
  <div className="demo relative w-100 overflow-hidden" 
  // style={{backgroundImage:`url("/images/pattern (4).svg")`}}
  >

  {/* --------------------------------- Item 1 --------------------------------- */}
<div id="" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 0 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden md:block">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden lg:block">
   <Gridcard></Gridcard>
</div>

</div>



{/* --------------------------------- Item 2 --------------------------------- */}
<div id="" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 1 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden md:block">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden lg:block">
   <Gridcard></Gridcard>
</div>

</div>



{/* --------------------------------- Item 3 --------------------------------- */}
<div id="" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 2 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden md:block">
    <Gridcard></Gridcard>
  </div>
  <div className="hidden lg:block">
   <Gridcard></Gridcard>
</div>

</div>
        {/* Slider controls */}

        {/* previous */}
        <button type="button" onClick={() => slide == 0 ? setSlide(2) : setSlide(slide-1)} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-200 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* next */}
        <button type="button" onClick={() => slide == 2 ? setSlide(0) : setSlide(slide+1)} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-200 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
</div>
  </>
  )
}

export default Carousel1;