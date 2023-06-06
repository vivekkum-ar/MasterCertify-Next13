import Image from 'next/image';
import React from 'react';
import "./component.module.css";

const Gridcard = () => {
  return (
    <div className="my-10 flex flex-col">
        <div className="md:mx-20 sm:mx-4 py-6">
        <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
              <Image height={30} width={30} alt="image" src="/images/pattern (4).svg" />
              </a>
              <span className="product-sale-label">sale!</span>
            </div>
            <div className="product-content">
              <h3 className="title"><a href="#">Some Course</a></h3>
              <div className="price"><span>$80.00</span> $56.00 </div>
              <a className="add-cart" href="#"> Button 1 </a>
              <a className="add-cart" href="#"> Button 2 </a>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      </div>
  )
}

export default Gridcard;