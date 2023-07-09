import Image from "next/image";
import { Poppins } from "next/font/google";
import PostPreview from "../component/PostPreview"; 
import getPostMetadata from "../component/getPostMetadata";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Scrollcard from "../component/scrollCard";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});


export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));


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


     <section className="wrapper">
  <section className="content blog">
    <div className="container">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-2/3">
          <div className="blog_medium">
            <article className="post">
              <div className="post_date">
                <span className="day">28</span>
                <span className="month">Nov</span>
              </div>
              <figure className="post_img">
                <a href="#">
                  <img src="images/blog/blog_medium_1.png" alt="blog post" />
                </a>
              </figure>
              <div className="post_content">
                <div className="post_meta">
                  <h2>
                    <a href="#">perferendis dolor asperio</a>
                  </h2>
                  <div className="metaInfo">
                    <span><i className="fa fa-user" /> By <a href="#">Louis</a> </span>
                    {/* <span><i className="fa fa-comments" /> <a href="#">12 Comments</a></span> */}
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores ut labore.</p>
                <a className="btn btn-small btn-default bg-blue-500 p-2 rounded-md text-white" href="#">Read More</a>
              </div>
            </article>
            <article className="post no_images">
              <div className="post_date">
                <span className="day">28</span>
                <span className="month">Nov</span>
              </div>
              <div className="post_content">
                <div className="post_meta">
                  <h2>
                    <a href="#">perferendis dolor asperio</a>
                  </h2>
                  <div className="metaInfo">
                    <span><i className="fa fa-user" /> By <a href="#">Louis</a> </span>
                    {/* <span><i className="fa fa-comments" /> <a href="#">12 Comments</a></span> */}
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores ut labore.</p>
                <a className="btn btn-small btn-default bg-blue-500 p-2 rounded-md text-white" href="#">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div> {/*/.container*/}
  </section>
</section>

       {/* ---------------------------- Posts using fetch --------------------------- */}
       <section className="wrapper">
  <section className="content blog">
    <div className="container">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-2/3">
          <div className="blog_medium">
        {postPreviews}
        </div>
        </div>
      </div>
    </div> 
  </section>
</section>
       
    </>
  );
}
