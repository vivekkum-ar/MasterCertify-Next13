"use client"
import React, { useLayoutEffect } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "./component.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

interface HeroComponentProps{
  title?: string;
  description?: string;  //Optional prop using ?
}

const Hero: React.FC<HeroComponentProps> = ({ 
  title = "Empowering Future Leaders with Innovative Education", 
  description = "We empower aspiring individuals with transformative learning experiences, fostering their growth and preparing them for a promising future in the ever-evolving professional landscape." 
}) => {
  // typically it's best to useLayoutEffect() instead of useEffect() to have React render the initial state properly from the very start.
useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    // all your GSAP animation code here
    gsap.from(".hero-card-1", {
      scrollTrigger: {
        trigger: ".hero-card-1",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      },
      x: "+200%",
      opacity: 0,
      // skewX: 30,
      skewY: 30,
      duration: 3,
      ease: "power2.inOut",
    });
    
    gsap.from(".hero-card-2", {
      scrollTrigger: {
        trigger: ".hero-card-1",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        scrub: 4,
      },
      x: 400,
      skewY: 30,
      opacity: 0,
      duration: 4,
      ease: "power2.inOut",
    });
    
    gsap.from(".hero-card-3", {
      scrollTrigger: {
        trigger: ".hero-card-1",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        scrub: 5,
      },
      x: -400,
      skewY: -30,
      opacity: 0,
      duration: 5,
      ease: "power2.inOut",
    });

    gsap.from(".illustration-2",{
      scrollTrigger: {
        trigger: ".hero-card-1",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        scrub: 3,
      },
      y: 400,
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
    });
  });
  return () => ctx.revert(); // <- cleanup!
}, []);

  return (
    <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] pt-5 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <a
          href="#"
          className="mt-5 mb-7 sm:mt-0 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pr-4 text-sm sm:text-xs text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
        >
          <span className="mr-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs sm:text-md text-white">
            New
          </span>
          <span className="text-sm sm:text-md font-normal sm:font-semibold">
            Jumbotron component was launched! See what&apos;s new
          </span>
          <svg aria-hidden="true" className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /> </svg>
        </a>
        <h1
          className={`mb-4 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl ${poppins.className}`}
        >
          {title}
        </h1>
        <p
          className={`mb-8 text-justify text-md sm:text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl ${poppins.className}`}
        >
          {description}
        </p>
        <form className="mx-auto w-full max-w-md">
          <label
            htmlFor="default-email"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" > <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /> </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900" />


    {/* -------------------------- mirror section start -------------------------- */}
    {/* -------------------------- mirror section start -------------------------- */}
      <div className="grid sm:grid-cols-4 sm:gap-4 justify-center">

        <div className="hero-card-3 row-span-1 ms-20 sm:ms-0 flex justify-center items-center sm:translate-x-20">
          <div className="ms-4 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
            <a href="#">
              <h5 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Competitive Edge
              </h5>
            </a>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              Stand out among peers with advanced qualifications and abilities.
            </p>
          </div>
        </div>

        <div className="illustration-2 col-span-2 grid md:-translate-y-0 -translate-y-8 justify-items-center p-2">
          <Image width={500} height={500}
            src="/images/illustration2.svg"
            className="my-2 flex h-72 justify-self-center"
            alt="MasterCertify Logo"
          />
        </div>

        <div className="-translate-y-20 sm:-translate-y-0">
          <div className="hero-card-1 me-20 sm:me-2 ms-1 sm:me-4 sm:-translate-x-1/2 sm:-translate-y-6 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
            <a href="#">
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Career Acceleration
              </h5>
            </a>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              Propel your professional growth with advanced certification.
            </p>
          </div>

          <div className="hero-card-2 me-4 mt-4 hidden sm:block translate-y-8 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
            <a href="#">
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Industry Recognition
              </h5>
            </a>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              Gain the respect and acknowledgment of industry leaders and
              employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
