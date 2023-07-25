'use client'
import React, { useRef, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../public/exploreswiper.css'
import ExploreMovieSlide from './ExploreMovieSlide';
import ExploreTvShowSlide from './ExploreTvShowSlide';



const ExploreSwiper = ({genres}) => {

  return (
    <Swiper
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="w-screen h-fit"
        
    >
        <SwiperSlide key={1}><ExploreMovieSlide genres={genres}/></SwiperSlide>
        <SwiperSlide key={2}><ExploreTvShowSlide genres={genres}/></SwiperSlide>

    </Swiper>
  )
}

export default ExploreSwiper
