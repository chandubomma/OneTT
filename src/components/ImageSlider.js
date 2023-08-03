'use client'
import React, { useRef, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';



const ImageSlider = ({images}) => {
    console.log(images);let count=0;
  return (
    <Swiper
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
            delay:1000,
            disableOnInteraction:false
        }}
        loop
        modules={[Autoplay]}
        className="w-80 h-80"
        
    >
       {images.map((image,count=count+1)=>(
        
        <SwiperSlide key={count}>
            <Image 
                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                alt="image"
                width={600}
                height={600}
                className='w-80 h-80'
                unoptimized
            />
        </SwiperSlide>
       ))}

    </Swiper>
  )
}

export default ImageSlider
