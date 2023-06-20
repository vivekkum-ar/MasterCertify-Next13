import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import CarbonQuotes from './iconify';
import "animate.css";
import Gridcard from './grid_card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel1 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <>
      <div className="relative embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide grow-0 shrink-0 basis-full gap-4 grid grid-cols-2 md:grid-cols-3">
            <Gridcard></Gridcard>
            <Gridcard></Gridcard>
            <div className="hidden md:block"><Gridcard></Gridcard></div>
          </div>
          <div className="embla__slide grow-0 shrink-0 basis-full gap-4 grid grid-cols-2 md:grid-cols-3">
            <Gridcard></Gridcard>
            <Gridcard></Gridcard>
            <div className="hidden md:block"><Gridcard></Gridcard></div>
          </div>
          <div className="embla__slide grow-0 shrink-0 basis-full gap-4 grid grid-cols-2 md:grid-cols-3">
            <Gridcard></Gridcard>
            <Gridcard></Gridcard>
            <div className="hidden md:block"><Gridcard></Gridcard></div>
          </div>
        </div>
          {/* previous */}
        <button type="button" onClick={() => emblaApi?.scrollPrev()} className="hidden md:block absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-200 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* next */}
        <button type="button" onClick={() => emblaApi?.scrollNext()} className="hidden md:block absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-200 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default Carousel1;

