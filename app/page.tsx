'use client';
import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "./component/hero";
import Neumorphcard from "./component/neumorphcard";
import {CodeIcon ,BuildIcon ,PeopleIcon ,ApartmentIcon ,LaptopIcon ,PersonIcon, MoreIcon} from "./component/iconify";
import Carousel from "./component/carouselTestimonial";
import Gridcard from "./component/grid_card";
import Carousel1 from "./component/carousel1";
import Link from "next/link";


const data = [{"icon":CodeIcon,"title":"Cutting-edge Training Programs","description":"Get access to cutting-edge training programs that enhance your skills and knowledge in various domains."},{"icon":BuildIcon,"title":"Hands-on Project Experience","description":"Gain valuable hands-on experience by working on real-world projects that simulate industry scenarios."},{"icon":PeopleIcon,"title":"Networking Opportunities","description":"Connect with industry professionals, mentors, and like-minded individuals to expand your professional network."},{"icon":ApartmentIcon,"title":"Industry-recognized Certifications","description":"Earn industry-recognized certifications that validate your skills and enhance your career prospects."},{"icon":LaptopIcon,"title":"Exposure to Latest Technologies","description":"Stay updated with the latest technologies and trends through hands-on exposure to cutting-edge tools and platforms."},{"icon":PersonIcon,"title":"Personalized Learning Paths","description":"Tailor your learning journey with personalized learning paths designed to meet your specific career goals."}]; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Hero></Hero>
      {/* ----------------- NeuMorphism card with certification svg starts here ---------------- */}
      <div
        className="my-0 md:my-10 flex flex-col bg-cover -translate-y-20 sm:-translate-y-0"
        style={{ backgroundImage: `url("/images/pattern (4).svg")` }}
      >
        <div className="mx-5 md:mx-20 py-6">
          <Neumorphcard
            Title="Elevate Your Skills with Our Certifications"
            Description="Unlock new career opportunities with industry-recognized certifications from Master Certify. Gain essential skills and stand out in your field with our comprehensive training programs and expert guidance."
          />
        </div>
      </div>
      {/* ------------ NeuMorphism card with certification svg ends here -----------  */}

      {/* --------------------- Why choose us grid starts here ---------------------  */}
      <div className="my-0 md:my-10 flex flex-col">
        <h1 className={`dark:text-white bg-inherit this-is-title text-3xl md:text-5xl lg:text-6xl font-bold text-center border-b-2 md:mx-36 mx-20 border-dark-400 text-md ${poppins.className}`}>Benefits</h1>
        <div className="md:mx-20 sm:mx-4 py-6">
          <div className="flex flex-wrap">
             {/* ---------------------- Mapping data items to element starts here---------------------  */}
            {data.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                <div className="flex items-center mb-2 border-2 rounded-lg border-gray-300">
                  <span className="text-blue-500 mr-2">
                    {item.icon}
                  </span>
                  <h4 className={`text-md sm:text-lg dark:text-gray-300 font-semibold ${poppins.className}`}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-justify dark:text-gray-300">{item.description}</p>
              </div>
            ))}
             {/* ---------------------- Mapping data items to element ends here---------------------  */}
          </div>
        </div>
      </div>
      {/* ---------------------- Why choose us grid ends here ----------------------  */}
      {/* <YourComponent></YourComponent>
       */}
        <h1 className={`dark:text-white bg-inherit this-is-title my-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center border-b-2 md:mx-36 mx-20 border-dark-400 text-md ${poppins.className}`}>
          Courses
        </h1>
        <Carousel1></Carousel1>
        <div className="w-full inline-flex items-center justify-between md:px-14 px-4">
        <h1 className={`text-gray-800 text-left dark:text-white bg-inherit my-10 text-lg md:text-2xl lg:text-2xl font-semibold ${poppins.className}`}>
          Master's in Business Application
        </h1>
        <Link href="/" className={`inline-flex ${poppins.className} hover:text-blue-700`}>View all <span className="ml-2">{MoreIcon}</span></Link>
        </div>
        <Carousel1></Carousel1>
        <div className="w-full inline-flex items-center justify-between md:px-14 px-4">
        <h1 className={`text-gray-800 text-left dark:text-white bg-inherit my-10 text-lg md:text-2xl lg:text-2xl font-semibold ${poppins.className}`}>
          Data Science
        </h1>
        <Link href="/" className={`inline-flex ${poppins.className} hover:text-blue-700`}>View all <span className="ml-2">{MoreIcon}</span></Link>
        </div>
        <Carousel1></Carousel1>
        <div className="w-full inline-flex items-center justify-between md:px-14 px-4">
        <h1 className={`text-gray-800 text-left dark:text-white bg-inherit my-10 text-lg md:text-2xl lg:text-2xl font-semibold ${poppins.className}`}>
          Data Science
        </h1>
        <Link href="/" className={`inline-flex ${poppins.className} hover:text-blue-700`}>View all <span className="ml-2">{MoreIcon}</span></Link>
        </div>
        <Carousel1></Carousel1>
        <div className="w-full inline-flex items-center justify-between md:px-14 px-4">
        <h1 className={`text-gray-800 text-left dark:text-white bg-inherit my-10 text-lg md:text-2xl lg:text-2xl font-semibold ${poppins.className}`}>
          Data Science
        </h1>
        <Link href="/" className={`inline-flex ${poppins.className} hover:text-blue-700`}>View all <span className="ml-2">{MoreIcon}</span></Link>
        </div>
        <Carousel1></Carousel1>
        <div className="w-full inline-flex items-center justify-between md:px-14 px-4">
        <h1 className={`text-gray-800 text-left dark:text-white bg-inherit my-10 text-lg md:text-2xl lg:text-2xl font-semibold ${poppins.className}`}>
          Data Science
        </h1>
        <Link href="/" className={`inline-flex ${poppins.className} hover:text-blue-700`}>View all <span className="ml-2">{MoreIcon}</span></Link>
        </div>
        <Carousel1></Carousel1>

        <h1 className={`dark:text-white bg-inherit this-is-title my-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center border-b-2 md:mx-36 mx-20 border-dark-400 text-md ${poppins.className}`}>
          Testimonials
        </h1>
       <Carousel></Carousel>
    </div>
  );
}