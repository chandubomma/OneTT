
import MovieListSwiper from './MovieListSwiper';

export default function ExploreTvShowSlide({genres}) {

    
  return (
    <div className='w-screen h-fit'>
        <h1 className='w-full text-center text-3xl text-blue-400 font-bold mb-4 dark:text-white'>TV Shows</h1>
        
        {genres.map(genre=> (
            genre.shows.length>8?
            <div key={genre.id+"show"} className="pt-3 dark:shadow-inner">
                <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">{genre.name}</h1>
                <MovieListSwiper MovieList={genre.shows} />
             </div>
             :<div key={genre.id} className='hidden'></div>
        ))}
       
    </div>
  )
}
