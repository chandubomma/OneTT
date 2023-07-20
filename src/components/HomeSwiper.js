'use client'
import React, { useRef, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Pagination} from 'swiper/modules';
import HomeSwiperSlide from "./HomeSwiperSlide";
import 'swiper/css';
import 'swiper/css/pagination';
//import '../../public/swiperStyles.css';


const HomeSwiper = ({popularMovies}) => {
    
  return (
    <Swiper
        centeredSlides={true}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        loop={true}
        pagination={{
            clickable:true
        }}
        modules={[Autoplay,Pagination]}
        className="w-screen h-full"
    >
       { popularMovies.map(movie => (
            <SwiperSlide key={movie.id}><HomeSwiperSlide movie={movie}/></SwiperSlide>
       ))}
    </Swiper>
  )
}

export default HomeSwiper
