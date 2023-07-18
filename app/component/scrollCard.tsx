"use client"
import Image from "next/image";
import { Poppins } from "next/font/google";
// import PostPreview from "../component/PostPreview"; 
// import getPostMetadata from "../component/getPostMetadata";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});


export default function Scrollcard() {

  const [imageHeight, setImageHeight] = useState('80vh'); // Default height for larger screens

  useEffect(() => {
    // Update the image height based on screen size
    const updateImageHeight = () => {
      if (window.innerWidth <= 640) {
        setImageHeight('40vh'); // Height for smaller screens
      } else {
        setImageHeight('80vh'); // Height for larger screens
      }
    };

    // Call the function on initial load
    updateImageHeight();

    // Listen to window resize and update the image height accordingly
    window.addEventListener('resize', updateImageHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let mm = gsap.matchMedia();
  //     // add a media query. When it matches, the associated function will run
  // mm.add("(min-width: 768px)", () => {
  //     // all your GSAP animation code here
  //     gsap.to(".card-woman", {
  //       scrollTrigger: {
  //         trigger: ".card-1",
  //         start: "top-=0.5% top",
  //         end: "bottom+=500% 100%",
  //         toggleActions: "play none none none",
  //         scrub: 2,
  //         // anticipatePin: 1,
  //         pin:true,
  //         pinSpacing:"-=40%",
  //         markers: true,
  //       },
  //       y: -2000,
  //       // x: -1000,
  //       stagger:{ 
  //         amount: 0.2,
  //         from: "end",
  //       }, // 0.1 seconds between when each ".box" element starts animating
  //       // scrub: true,
        
  //     });
  //   });
  //   return () => ctx.revert(); // <- cleanup!
  // });
  // }, []);

  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      {/* <Hero 
      title="Blogs" 
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic numquam voluptatem dolore quisquam voluptas qui dignissimos eligendi officiis distinctio saepe."></Hero>
       */}
       <div className="overflow-hidden card-1 dark:bg-gray-900">
       <div className="card-woman-0 absolute mt-20 mx-2 md:mx-20 md:m-20 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image width={1000} height={1000} style={{width:"100vw",height:imageHeight}} loading="lazy" className="rounded-lg" src="/images/woman-laptop.jpg" alt="" />
        <div className="absolute top-0 p-6">
          <h5 className={`mb-2 text-2xl font-semibold leading-tight text-white ${poppins.className}`}>
            Card title0
          </h5>
          <p className="mb-4 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias iusto earum itaque, provident quaerat eum illo esse unde, vel blanditiis dolore eveniet, eaque error quisquam ducimus? Officia, excepturi obcaecati.
          </p>
          <p className="text-base text-white">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

<div className="card-woman absolute mt-20 mx-2 md:mx-20 md:m-20 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image width={1000} height={1000} style={{width:"100vw",height:imageHeight}} loading="lazy" className="rounded-lg" src="/images/woman-laptop.jpg" alt="" />
        <div className="absolute top-0 p-6">
          <h5 className={`mb-2 text-2xl font-semibold leading-tight text-white ${poppins.className}`}>
            Card title1
          </h5>
          <p className="mb-4 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias iusto earum itaque, provident quaerat eum illo esse unde, vel blanditiis dolore eveniet, eaque error quisquam ducimus? Officia, excepturi obcaecati.
          </p>
          <p className="text-base text-white">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="card-woman absolute mt-20 mx-2 md:mx-20 md:m-20 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image width={1000} height={1000} style={{width:"100vw",height:imageHeight}} loading="lazy" className="rounded-lg" src="/images/woman-laptop.jpg" alt="" />
        <div className="absolute top-0 p-6">
          <h5 className={`mb-2 text-2xl font-semibold leading-tight text-white ${poppins.className}`}>
            Card title2
          </h5>
          <p className="mb-4 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias iusto earum itaque, provident quaerat eum illo esse unde, vel blanditiis dolore eveniet, eaque error quisquam ducimus? Officia, excepturi obcaecati.
          </p>
          <p className="text-base text-white">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="card-woman relative mt-20 mx-2 md:mx-20 md:m-20 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image width={1000} height={1000} style={{width:"100vw",height:imageHeight}} loading="lazy" className="rounded-lg" src="/images/woman-laptop.jpg" alt="" />
        <div className="absolute top-0 p-6">
          <h5 className={`mb-2 text-2xl font-semibold leading-tight text-white ${poppins.className}`}>
            Card title3
          </h5>
          <p className="mb-4 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias iusto earum itaque, provident quaerat eum illo esse unde, vel blanditiis dolore eveniet, eaque error quisquam ducimus? Officia, excepturi obcaecati.
          </p>
          <p className="text-base text-white">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      </div>
      {/* ---------------------------- Posts using fetch --------------------------- */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-36 dark:bg-gray-900">{postPreviews}</div> */}
      {/* <div className="relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Image width={1000} height={1000} style={{width:"100vw",height:imageHeight}} loading="lazy" className="rounded-lg" src="/images/woman-laptop.jpg" alt="" />
        <div className="absolute top-0 p-6">
          <h5 className={`mb-2 text-2xl font-semibold leading-tight text-white ${poppins.className}`}>
            Card title1
          </h5>
          <p className="mb-4 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias iusto earum itaque, provident quaerat eum illo esse unde, vel blanditiis dolore eveniet, eaque error quisquam ducimus? Officia, excepturi obcaecati.
          </p>
          <p className="text-base text-white">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div> */}
    </>
  );
}
