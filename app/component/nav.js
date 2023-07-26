
import React, { useEffect } from 'react';
import * as icons from "@/app/component/iconify"
import { Poppins } from 'next/font/google';

/* -------------------------- Font poppins setting -------------------------- */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400','600','800','900'],
});

const NavBm = () => {
  useEffect(() => {
    const NavBm = document.querySelector('.NavBm');

    if (NavBm) {
      NavBm.querySelectorAll('li a').forEach((a, i) => {
        a.onclick = (e) => {
          e.preventDefault(); // Prevent the default behavior of links
          if (a.classList.contains('NavBm-item-active')) return;

          NavBm.querySelectorAll('li a').forEach((el) => {
            el.classList.remove('NavBm-item-active');
          });

          a.classList.add('NavBm-item-active');

          let NavBm_indicator = NavBm.querySelector('.NavBm-indicator');

          NavBm_indicator.style.left = `calc(${i * 80 + 60}px - 55px)`;
        };
      });
    }
  }, []); // The empty dependency array makes this code run only once after initial rendering

  return (
    <div className='NavBm-container z-50'>
        <ul className="NavBm sm:w-fit w-screen">
          <span className="NavBm-indicator" />
          <li>
            <a className='NavBm-item-active' href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Home</span>
            </a>
          </li>
          <li>
            <a className='' href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Receipt</span>
            </a>
          </li>
          <li>
            <a className="" href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Add</span>
            </a>
          </li>
          <li>
            <a className='' href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Noti</span>
            </a>
          </li>
          <li>
            <a className='' href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Account</span>
            </a>
          </li>
          <li>
            <a className='' href="#">
              {icons.HomeRoundedIcon}
              <span className={`title ${poppins.className} text-xs`}>Account2</span>
            </a>
          </li>
        </ul>
        {/* https://css-tricks.com/gooey-effect/ */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
  )
}

export default NavBm
