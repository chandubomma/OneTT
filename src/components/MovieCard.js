import React from 'react'
import Image from 'next/image';

const MovieCard = ({movie}) => {

    const imgUrl="https://image.tmdb.org/t/p/original"+movie.poster_path;
    const imgUrl2="https://image.tmdb.org/t/p/original"+movie.backdrop_path;
    const votePercent = movie.vote_average*10;

  return (
    <div className='pt-6'>
        <div className='relative '>
            <div className="absolute -top-5 left-1 z-30 text-white text-md w-fit ml-1 bg-gradient-to-r from-blue-500 to-slate-500 shadow-md shadow-gray-500 font-semibold p-2 rounded-full">
                <h1>{votePercent}%</h1>
        </div>

            <Image
                src={imgUrl || imgUrl2}
                alt="Picture of the movie"
                width={600}
                height={400}
                className="md:h-56 md:w-40 h-48 w-40 rounded-lg shadow hover:shadow-xl hover:cursor-pointer hover:scale-105  duration-300 ease-out"
                priority={true}
            />

        </div>
        <h2 className='text-blue-500 mt-2 font-medium dark:text-white w-full hidden md:flex justify-center '>{movie.title || movie.name}</h2>
      
    </div>
  )
}

export default MovieCard
