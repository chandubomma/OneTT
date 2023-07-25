import MovieListSwiper from './MovieListSwiper';

export default function ExploreMovieSlide({genres}) {

    
  return (
    <div className='w-screen h-fit'>
        <h1 className='w-full text-center text-3xl text-blue-400 font-bold mb-4 dark:text-white'>Movies</h1>
        
        {genres.map(genre=> (
            <div key={genre.id} className="pt-3 dark:shadow-inner">
                <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">{genre.name}</h1>
                <MovieListSwiper MovieList={genre.movies} />
             </div>
        ))}
       

    </div>
  )
}



