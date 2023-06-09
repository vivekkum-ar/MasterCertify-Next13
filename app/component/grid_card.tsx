import Image from 'next/image';
import React from 'react';
import "./component.module.css";

const Gridcard = () => {
  return (
    <div className="my-10 flex flex-col">
        <div className="md:mx-10 sm:mx-4">
          <div className="product-grid relative">
            <div className="product-image">
              <a href="#" className="image">
              <Image height={80} width={30} alt="image" src="/images/pattern (4).svg" />
              </a>
              <span className="product-sale-label translate-x-3 translate-y-2 absolute z-2">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="product-content">
              <h3 className="title"><a href="#">Some Course</a></h3>
              <div className="price"><span>$80.00</span> $56.00 </div>
              <a className="add-cart rounded-l-3xl" href="#"> Button 1 </a>
              <a className="add-cart rounded-r-3xl" href="#"> Button 2 </a>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Gridcard;