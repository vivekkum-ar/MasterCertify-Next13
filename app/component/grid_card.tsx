import Image from 'next/image';
import React from 'react';
import "./component.module.css";
import { Poppins } from 'next/font/google';
import {BookIcon,HomeScreenRounded} from "./iconify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

const Gridcard = () => {
  return (
    <div className="flex flex-col">
        <div className="md:mx-10 sm:mx-4">
          <div className="product-grid relative rounded-2xl border-2 border-dark dark:bg-gray-500 dark:bg-opacity-70">
            <div className="product-image rounded-2xl">
              <a href="#" className="image">
              <Image height={100} width={100} alt="image" src="/images/pattern (4).svg" />
              </a>
              <span className="product-sale-label translate-x-3 translate-y-2 absolute z-2">Lorem ipsum dolor.</span>
            </div>
            <div className="product-content rounded-b-2xl dark:text-white p-1 md:p-3">
              <h4 className={`title font-semibold ${poppins.className}`}><a href="#" className='dark:text-white text-sm md:text-lg py-0'>Some Course</a></h4>
              <h4 className="description text-justify dark:text-white text-xs md:text-base md:pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus nesciunt officiis iste eligendi voluptate architecto aliquam at et quod. Consequuntur cum officia mollitia sit?</h4>
              {/* <div className="price"><span>$80.00</span> $56.00 </div> */}
              <a className={`hidden md:inline-flex add-cart rounded-lg w-full md:w-auto md:mx-2 dark:text-white flex sm:inline-flex justify-center items-center py-0 my-1 md:my-0 md:py-2.5 px-0 md:px-5 text-xs md:text-base font-medium text-center text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${poppins.className}`} href="#"> 
              Read More <span className='mr-1'>{HomeScreenRounded}</span>
              </a>
              <a className={`inline-flex add-cart rounded-lg w-full md:w-auto md:mx-2 dark:text-white flex sm:inline-flex justify-center items-center py-0 my-1 md:my-0 md:py-2.5 px-0 md:px-5 text-xs md:text-base font-medium text-center text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${poppins.className}`} href="#"> 
              Enroll <span className='ml-1'>{BookIcon}</span>
              </a>
              {/* <a className={`add-cart rounded-r-3xl ${poppins.className}`} href="#"> Button 2 </a> */}
            </div>
          </div>
      </div>
      </div>
  )
}

export default Gridcard;