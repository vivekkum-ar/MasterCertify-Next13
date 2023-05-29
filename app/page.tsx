'use client';

import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "./component/hero";
import Neumorphcard from "./component/neumorphcard";
import {CodeIcon ,BuildIcon ,PeopleIcon ,ApartmentIcon ,LaptopIcon ,PersonIcon} from "./component/iconify";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "600", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="my-10 flex flex-col bg-cover" style={{ backgroundImage: `url("/images/pattern (4).svg")` }}>
        <div className="mx-20 py-6">
          <Neumorphcard
            Title="Elevate Your Skills with Our Certifications"
            Description="Unlock new career opportunities with industry-recognized certifications from Master Certify. Gain essential skills and stand out in your field with our comprehensive training programs and expert guidance."
          />
        </div>
      </div>

      <div className="my-10 flex flex-col">
        <div className="md:mx-20 sm:mx-4 py-6">
        <div className="flex flex-wrap">
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{CodeIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Cutting-edge Training Programs</h4>
    </div>
    <p>Get access to cutting-edge training programs that enhance your skills and knowledge in various domains.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{BuildIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Hands-on Project Experience</h4>
    </div>
    <p>Gain valuable hands-on experience by working on real-world projects that simulate industry scenarios.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{PeopleIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Networking Opportunities</h4>
    </div>
    <p>Connect with industry professionals, mentors, and like-minded individuals to expand your professional network.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{ApartmentIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Industry-recognized Certifications</h4>
    </div>
    <p>Earn industry-recognized certifications that validate your skills and enhance your career prospects.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{LaptopIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Exposure to Latest Technologies</h4>
    </div>
    <p>Stay updated with the latest technologies and trends through hands-on exposure to cutting-edge tools and platforms.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center mb-2  border-2 rounded-lg border-gray-300">
      <span className="text-blue-500 text-3xl mr-2">{PersonIcon}</span>
      <h4 className={`text-lg font-semibold ${poppins.className}`}>Personalized Learning Paths</h4>
    </div>
    <p>Tailor your learning journey with personalized learning paths designed to meet your specific career goals.</p>
  </div>
</div>

        </div>
        </div>
        
    </>
  );
}
