import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({movie}) => {
    var imgUrl
    if(movie.poster_path)
    imgUrl="https://image.tmdb.org/t/p/original"+movie.poster_path;
    else if(movie.backdrop_path) imgUrl="https://image.tmdb.org/t/p/original"+movie.backdrop_path;
    else return(<></>);
    const votePercent = movie.vote_average*10;
    var path ;
    if(movie.title)path = `/movie_details/${movie.id}`;
    else path = `/show_details/${movie.id}`;

  return (
    <a href={path}>
        <div className='pt-6 w-fit inline-block md:w-52'>
            <div className='relative '>
                <div className="absolute -top-5 md:-top-6 left-1 md:left-3 z-30 text-white text-md md:text-lg w-fit ml-1 bg-gradient-to-r from-blue-500 to-slate-500 shadow-md shadow-gray-500 font-semibold p-2 rounded-full">
                    <h1>{votePercent.toPrecision(2)}%</h1>
            </div>

                <Image
                    src={imgUrl}
                    alt={movie.title || movie.name}
                    width={600}
                    height={400}
                    className="md:h-72 md:w-52 h-48 w-40 rounded-lg shadow hover:shadow-xl hover:cursor-pointer hover:scale-105  duration-300 ease-out"
                    priority={true}
                />

            </div>
            <h2 className='text-blue-500 mt-2 font-medium dark:text-white w-full hidden md:flex justify-center '>{movie.title || movie.name}</h2>
        </div>
    </a>
    
  )
}

export default MovieCard
