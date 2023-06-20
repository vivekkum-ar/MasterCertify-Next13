import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import CarbonQuotes from './iconify';
import "animate.css";
import Gridcard from './grid_card';
import useEmblaCarousel from 'embla-carousel-react'

const Carousel1 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const [slide, setSlide] = useState(0)
  return (
  <>
     <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide grow-0 shrink-0 basis-full grid grid-cols-3"><Gridcard></Gridcard><Gridcard></Gridcard><Gridcard></Gridcard></div>
        <div className="embla__slide grow-0 shrink-0 basis-full grid grid-cols-3"><Gridcard></Gridcard><Gridcard></Gridcard><Gridcard></Gridcard></div>
        <div className="embla__slide grow-0 shrink-0 basis-full grid grid-cols-3"><Gridcard></Gridcard><Gridcard></Gridcard><Gridcard></Gridcard></div>
      </div>
    </div>
  </>
  )
}

export default Carousel1;

