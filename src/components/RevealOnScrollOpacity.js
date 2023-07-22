'use client'

import { useState, useRef, useEffect } from "react";

const RevealOnScrollOpacity = ({children}) => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const myref = useRef(null);
    const myref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(myref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      myref2.current.classList.remove(`opacity-0`);
      myref2.current.classList.add(`opacity-100`);
     
      
    } else {
        myref2.current.classList.add(`opacity-0`);
        myref2.current.classList.remove(`opacity-100`);
        
    }
  }, [isIntersecting]);



  return (
    <div ref={myref} className='w-full' style={{height:"400px"}}>
        <div ref={myref2} className={`opacity-0  delay-500 duration-[1500ms] ease-in-out`}>
            {children}
        </div>
    </div>
  )
}

export default RevealOnScrollOpacity
