import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "animate.css";
import Gridcard from './grid_card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const data = [ [ { "Course Name": "Intro to Data Structures", "Course Description": "This course will teach you the basics of data structures, such as lists, arrays, and trees.", }, { "Course Name": "Advanced Algorithms", "Course Description": "This course will explore the advanced concepts of algorithms, such as sorting and searching.", }, { "Course Name": "Object-Oriented Programming", "Course Description": "This course will teach you the basics of object-oriented programming, such as classes, objects, and inheritance.", }, ], [ { "Course Name": "Web Development", "Course Description": "This course will teach you how to build websites using HTML, CSS, and JavaScript.", }, { "Course Name": "Security", "Course Description": "This course will teach you about the different types of security threats and how to protect your computer from them.", }, { "Course Name": "Machine Learning", "Course Description": "This course will teach you how to build machine learning models that can learn from data and make predictions.", }, ], [ { "Course Name": "Data Science", "Course Description": "This course will teach you how to collect, clean, and analyze data.", }, { "Course Name": "Artificial Intelligence", "Course Description": "This course will teach you about the principles of artificial intelligence and how to build intelligent agents.", }, ], ];

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
          {data.map((items,index) => (
            <div key={index} className="embla__slide grow-0 shrink-0 basis-full gap-4 grid grid-cols-2 px-2 md:grid-cols-3">
              {items.map((item,subindex) => (
                subindex === 2 ? (
                  // Render the third Gridcard on subindex === 2
                  <div key={subindex} className="md:block hidden">
                  <Gridcard courseTitle={item['Course Name']} courseDes={item['Course Description']} />
                  </div>
                ) : (
                  // Render the rest of the Gridcards
                  <div key={subindex}>
                  <Gridcard courseTitle={item['Course Name']} courseDes={item['Course Description']} />
                  </div>
                )
              ))}
          </div>
          ))}
          
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

