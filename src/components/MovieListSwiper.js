'use client'
import React, { useRef, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from './MovieCard';




const MovieListSwiper = ({MovieList}) => {
    MovieList = MovieList.filter((movie)=>(movie.poster_path || movie.backdrop_path))
  return (
    <Swiper
        
        breakpoints={{
            276: {
                slidesPerView: 3,
            },
            500:{
                slidesPerView:4,
            },
            700: {
                slidesPerView: 5,
            },
            900:{
                slidesPerView: 6,
            },
            1000:{
                slidesPerView: 7,
            }
          }}

          className='dark:bg-gradient-to-l dark:from-slate-900 dark:to-blue-900'
    >
       { MovieList.map(movie => (
            <SwiperSlide key={movie.id} className='md:ml-4 mt-2 mb-4 mx-1 ml-1'><MovieCard movie={movie}/></SwiperSlide>
       ))}
    </Swiper>
  )
}

export default MovieListSwiper
