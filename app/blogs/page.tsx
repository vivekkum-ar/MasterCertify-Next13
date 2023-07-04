import Image from "next/image";
import { Poppins } from "next/font/google";
// import PostPreview from "../component/PostPreview"; 
// import getPostMetadata from "../component/getPostMetadata";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Scrollcard from "../component/scrollCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});


export default function Home() {
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
  //         start: "top top",
  //         end: "bottom+=200% 100%",
  //         toggleActions: "play none none none",
  //         scrub: 2,
  //         // anticipatePin: 1,
  //         pin:true,
  //         pinSpacing:"-=40%",
          
  //         markers: true,
  //       },
  //       y: -2000,
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
     <Scrollcard/>
    </>
  );
}
