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


export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      {/* <Hero 
      title="Blogs" 
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic numquam voluptatem dolore quisquam voluptas qui dignissimos eligendi officiis distinctio saepe."></Hero>
       */}
     {/* <Scrollcard/> */}

        
       {/* ---------------------------- Posts using fetch --------------------------- */}
       <section className="wrapper dark:bg-gray-900">
  <section className="content blog mx-6 ">
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-3/4 sm:w-full">
          <div className="blog_medium md:me-6 me-0">
        {postPreviews}
        </div>
        </div>


        <div className="col-span-12 md:col-span-4 lg:col-span-4 sm:col-span-4 sm:col-span-4 md:absolute md:right-0">
        <div className="md:sticky md:top-24">
  <div className="sidebar ">
    
    <div className="widget widget_categories">
      <div className="widget_title">
        <h4><span></span>Categories</h4>  
      </div>
      <ul className="arrows_list list_style">
        <li><a href="#">Grapic Design (10)</a></li>
        <li><a href="#">Web Design &amp; Development (25)</a></li>
        <li><a href="#">Photography (29)</a></li>
        <li><a href="#">Custom Illustrations (19)</a></li>
        <li><a href="#">Wordpress Themes(38)</a></li>
        <li><a href="#">Videography (33)</a></li>
      </ul>
    </div>
    
    
    <div className="widget widget_archives">
      <div className="widget_title">
        <h4><span></span>Archives</h4>
      </div>
      <ul className="archives_list list_style">
        <li><a href="#">November 2015</a></li>
        <li><a href="#">October 2015</a></li>
        <li><a href="#">September 2015</a></li>
        <li><a href="#">August 2015</a></li>
        <li><a href="#">July 2015</a></li>
        <li><a href="#">June 2015</a></li>
        <li><a href="#">May 2015</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>



      </div>
    </div> 
  </section>
</section>
       
    </>
  );
}
