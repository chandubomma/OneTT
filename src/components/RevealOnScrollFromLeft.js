'use client'

import { useState, useRef, useEffect } from "react";

const ReavealOnScrollFromLeft = ({children}) => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const myref = useRef(null);
    const myref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(myref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      myref2.current.classList.remove(`md:-left-full`);
      myref2.current.classList.add(`md:left-32`);
     
      
    } else {
        myref2.current.classList.add(`md:-left-full`);
        myref2.current.classList.remove(`md:left-32`);
        
    }
  }, [isIntersecting]);



  return (
    <div ref={myref} className='w-full relative' style={{height:"400px"}}>
        <div ref={myref2} className={`absolute  md:-left-full left-5  duration-[1500ms] ease-in-out`}>
            {children}
        </div>
    </div>
  )
}

export default ReavealOnScrollFromLeft
