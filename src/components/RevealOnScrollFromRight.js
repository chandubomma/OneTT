'use client'

import { useState, useRef, useEffect } from "react";

const ReavealOnScroll = ({children}) => {

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
      myref2.current.classList.remove(`md:-right-full`);
      myref2.current.classList.add(`md:right-60`);
    } else {
        myref2.current.classList.add(`md:-right-full`);
        myref2.current.classList.remove(`md:right-60`);
    }
  }, [isIntersecting]);



  return (
    <div ref={myref} className='w-full relative flex justify-center h-fit min-h-[22rem] overflow-hidden'>
        <div ref={myref2} className={`absolute text-sm md:-right-full  delay-500 dark:delay-0 duration-[1200ms] dark:duration-[1500ms] ease-in-out`}>
            {children}
        </div>
    </div>
  )
}

export default ReavealOnScroll
