"use client"
import React, { useLayoutEffect } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "./component.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Lottie from "lottie-react";
import bookLottie from "@/public/images/animation_lkji7app.json";
import { useLottie, useLottieInteractivity } from "lottie-react";


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
  const style = {
    height: 100,
    padding:0,
    marginTop:0,
    scale:5,
    // transform: "translateY(30px)"
  };
  
  const Lottie = () => {
    const options = {
      animationData: bookLottie,
      loop: false,
      autoplay: true,
    };
  
    const { View } = useLottie(options, style);
  
    return View;
  };

useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    let mm = gsap.matchMedia();
// add a media query. When it matches, the associated function will run
mm.add("(max-width: 640px)", () => {
    // all your GSAP animation code here
    gsap.from(".hero-card-1", {
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "bottom 20%",
        end: "bottom+=100% 0%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      },
      x: -400,
      opacity: 0,
      skewX: 30,
      duration: 3,
      // ease: "power2.inOut",
    });
    
    gsap.from(".hero-card-2", {
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "bottom 20%",
        end: "bottom+=100% 0%",
        toggleActions: "play none none none",
        scrub: true,
      },
      x: -400,
      opacity: 0,
      duration: 4,
      // ease: "power2.inOut",
    });
    
    gsap.from(".hero-card-3", {
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "bottom 20%",
        end: "bottom+=100% 0%",
        toggleActions: "play none none none",
        scrub: true,
      },
      x: 400,
      opacity: 0,
      duration: 3,
      // ease: "power2.inOut",
    });

    gsap.from(".illustration-2",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "bottom 20%",
        end: "bottom+=100% 0%",
        toggleActions: "play none none none",
        scrub: 3,
      },
      y: 400,
      opacity: 0,
      duration: 3,
      // ease: "power2.inOut",
    });

    gsap.to(".target-svg-right",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "top 0%",
        end: "bottom+=100% 10%",
        toggleActions: "play none none none",
        scrub: true,
      },
      x: "50%",
      opacity:0,
      duration: 3,
      ease: "power2",
    });

    gsap.to(".target-svg-left",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "top 0%",
        end: "bottom+=100% 10%",
        toggleActions: "play none none none",
        scrub: true,
      },
      x: "-100%",
      opacity:0,
      duration: 3,
      ease: "power2",
    });
  });
});
});






useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    let mm = gsap.matchMedia();
    // add a media query. When it matches, the associated function will run
mm.add("(min-width: 768px)", () => {
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
    
    gsap.from(".target-description",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "top 15%",
        end: "+300% 50%",
        toggleActions: "play none none none",
        // pin: true,
        scrub: true,
      },
      y:"50%",
      duration: 3,
    });

    gsap.from(".target-description-2",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "top 15%",
        end: "+300% 50%",
        toggleActions: "play none none none",
        // pin: true,
        scrub: true,
      },
      y:"20vh",
      duration: 3,
    });

    gsap.to(".target-svg",{
      scrollTrigger: {
        trigger: ".trigger-title",
        start: "top 15%",
        end: "+300% 50%",
        toggleActions: "play none none none",
        scrub: true,
      },
      y: -100,
      opacity:0,
      duration: 2,
      ease: "power2",
    });
  });
  return () => ctx.revert(); // <- cleanup!
});
}, []);

  return (
    <section className="bg-white overflow-hidden bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] pt-5 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="relative h-max md:h-screen z-10 mx-auto px-0 py-8 text-center lg:py-16">

      <div className="target-svg absolute w-screen h-screen flex justify-between">      
 {/* ---------------------------- Pillar SVG files ---------------------------- */}
<svg className="target-svg-left -z-10 w-24 md:w-48 -translate-y-20 md:block text-dark scale-x-[-1] " id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='86.602' height='50' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,0%,0)'/><path className="dark:opacity-80 opacity-30 " d='M-.15 6.75 21.5-5.75M-.15.238l21.65-12.5M0 6.75l-21.65-12.5M0 .238l-21.65-12.5M0 12.5v-25L21.65-25M0 12.5-21.65 0v-25L0-37.5 21.65-25V0zm86.452 44.25 21.65-12.5m-21.65 5.988 21.65-12.5m-21.65 5.988 21.65-12.5m-21.5 25.524-21.65-12.5m21.65 5.988-21.65-12.5m21.65 5.988-21.65-12.5m21.65 6.274L64.952 25m21.65 37.5v-25l21.65-12.5m-43.3 25V25l21.65-12.5 21.65 12.5v25l-21.65 12.5Zm21.5-43.25 21.65-12.5M86.452.238l21.65-12.5M86.602 6.75l-21.65-12.5M86.601.238l-21.65-12.5M86.601 12.5v-25l21.65-12.5m-21.65 37.5L64.952 0v-25l21.65-12.5 21.65 12.5V0zM43.15 31.75l21.651-12.5m-21.65 5.988 21.65-12.5m-21.65 5.988 21.65-12.5m-21.5 25.524-21.65-12.5m21.65 5.988-21.65-12.5m21.65 5.988-21.65-12.5M43.3 12.5 21.651 0M43.3 37.5v-25L64.951 0m0 25-21.65 12.5L21.651 25V0L43.3-12.5 64.951 0zm-21.65 37.5L21.651 50M43.3 87.5v-25L64.951 50m0 0v25l-21.65 12.5L21.651 75V50L43.3 37.5ZM-.15 56.75 21.5 44.25M-.15 50.238l21.65-12.5M-.15 43.726l21.65-12.5M0 56.75l-21.65-12.5M0 50.238l-21.65-12.5M0 43.726l-21.65-12.5M0 37.5-21.65 25M0 62.5v-25L21.65 25m0 0v25L0 62.5-21.65 50V25L0 12.5z'  strokeLinecap='square' strokeWidth='1' stroke='hsla(199, 0%, 35%, 0.8)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-519,-114)' fill='url(#a)'/></svg>
<svg className="target-svg-right -z-10 w-24 md:w-48 -translate-y-20 md:block " id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='86.602' height='50' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,0%,0)'/><path className="dark:opacity-80 opacity-30 " d='M-.15 6.75 21.5-5.75M-.15.238l21.65-12.5M0 6.75l-21.65-12.5M0 .238l-21.65-12.5M0 12.5v-25L21.65-25M0 12.5-21.65 0v-25L0-37.5 21.65-25V0zm86.452 44.25 21.65-12.5m-21.65 5.988 21.65-12.5m-21.65 5.988 21.65-12.5m-21.5 25.524-21.65-12.5m21.65 5.988-21.65-12.5m21.65 5.988-21.65-12.5m21.65 6.274L64.952 25m21.65 37.5v-25l21.65-12.5m-43.3 25V25l21.65-12.5 21.65 12.5v25l-21.65 12.5Zm21.5-43.25 21.65-12.5M86.452.238l21.65-12.5M86.602 6.75l-21.65-12.5M86.601.238l-21.65-12.5M86.601 12.5v-25l21.65-12.5m-21.65 37.5L64.952 0v-25l21.65-12.5 21.65 12.5V0zM43.15 31.75l21.651-12.5m-21.65 5.988 21.65-12.5m-21.65 5.988 21.65-12.5m-21.5 25.524-21.65-12.5m21.65 5.988-21.65-12.5m21.65 5.988-21.65-12.5M43.3 12.5 21.651 0M43.3 37.5v-25L64.951 0m0 25-21.65 12.5L21.651 25V0L43.3-12.5 64.951 0zm-21.65 37.5L21.651 50M43.3 87.5v-25L64.951 50m0 0v25l-21.65 12.5L21.651 75V50L43.3 37.5ZM-.15 56.75 21.5 44.25M-.15 50.238l21.65-12.5M-.15 43.726l21.65-12.5M0 56.75l-21.65-12.5M0 50.238l-21.65-12.5M0 43.726l-21.65-12.5M0 37.5-21.65 25M0 62.5v-25L21.65 25m0 0v25L0 62.5-21.65 50V25L0 12.5z'  strokeLinecap='square' strokeWidth='1' stroke='hsla(199, 0%, 35%, 0.8)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-519,-114)' fill='url(#a)'/></svg>
</div>
 {/* ---------------------------- Jumbotron Top Alert ---------------------------- */}
        {/* <a
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
        </a> */}
        <div className="grid grid-flow-row content-center md:content-start justify-items-center sm:h-100">
        <div><h1
          className={`max-w-screen-lg trigger-title my-4 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl ${poppins.className}`}
        >
          {title}
        </h1>
        </div>
        <div className="target-description md:py-0 py-24">

            <p className={`max-w-screen-md mb-8 mx-10 md:mx-60 text-justify text-md sm:text-lg font-normal text-gray-500 dark:text-gray-200 lg:text-xl ${poppins.className}`} >
              {description}
            </p>
          </div>
        {/* <div className="grid grid-cols-4 gap-2 my-40 mx-24 justify-center -translate-y-100">
          <div className="target-lottie-2 col-span-1">
            <Lottie></Lottie>
          </div>
          <div className="target-description-2 col-span-3 ml-12 px-10">
            <p className={`mb-8 text-justify text-md sm:text-lg font-normal text-gray-500 dark:text-gray-200 lg:text-xl ${poppins.className}`} >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque cumque quidem nam eaque mollitia magni numquam dicta tempore iusto vel quos exercitationem, odio minima, repellat eveniet, officia reiciendis molestiae omnis?
            </p>
          </div>
        </div> */}

        <form className="target-description-2 mx-auto w-full max-w-md px-6">
          <label
            htmlFor="default-email"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {" "}
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "}
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />{" "}
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full rounded-lg border border-2 border-gray-500 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
        <div className="grid justify-items-center mt-12 md:hidden">
        <button className={`rounded-full bg-blue-700 text-white animate-bounce h-8 w-8`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
        </button>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900" />

      {/* -------------------------- mirror section start -------------------------- */}
      {/* -------------------------- mirror section start -------------------------- */}
      <div className="grid sm:grid-cols-4 sm:gap-4 justify-center">
        <div className="hero-card-3 row-span-1 ms-20 sm:ms-0 flex justify-center items-center sm:translate-x-20">
          <div className="ms-4 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg
              className="h-6 w-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />{" "}
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />{" "}
            </svg>
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
          <Image
            width={500}
            height={500}
            src="/images/illustration2.svg"
            className="my-2 flex h-72 justify-self-center"
            alt="MasterCertify Logo"
          />
        </div>

        <div className="-translate-y-20 sm:-translate-y-0">
          <div className="hero-card-1 me-20 sm:me-2 ms-1 sm:me-4 sm:-translate-x-1/2 sm:-translate-y-6 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg
              className="h-6 w-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />{" "}
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />{" "}
            </svg>
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
            <svg
              className="h-6 w-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />{" "}
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />{" "}
            </svg>
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
