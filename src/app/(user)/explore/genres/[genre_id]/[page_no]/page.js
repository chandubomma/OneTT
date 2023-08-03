import ShowSearchResluts from "@/components/ShowSearchResluts";
import Link from "next/link";
export const revalidate = 86400;

const page = async({params}) => {
  let results;
  let pageHeading=''
  const genre = params.genre_id;
  switch(genre){
    case 'upcoming_movies' : {
      results = await getUpcomingMovies(params.page_no);
      pageHeading = 'Upcoming Movies'
      break;
    }
    case 'top_rated_movies' : {
      results = await getTopRatedMovies(params.page_no);
      pageHeading = 'Top Rated Movies'
      break;
    }
    case 'playing_now' : {
      results = await getNowPlayingMovies(params.page_no);
      pageHeading = 'Now Playing Movies'
      break;
    }
    case 'popular_movies' : {
      results = await getPopularMovies(params.page_no);
      pageHeading = 'Popular Movies'
      break;
    }
    case 'popular_shows' : {
      results = await getPopularTvShows(params.page_no);
      pageHeading = 'Popular Tv Shows'
      break;
    }
    case 'top_rated_shows' : {
      results = await getTopRatedTvShows(params.page_no);
      pageHeading = 'Top Rated Shows'
      break;
    }
    default : {
      results = await getResult(params.genre_id,params.page_no);
    }
  }
  
  return (
    <div>
         <h2 className="text-2xl text-blue-300 font-bold mb-4 text-start pl-5 dark:text-white">{pageHeading}</h2>
        <ShowSearchResluts searchResults={results}/>
        <div className="w-full flex justify-end my-10 md:pr-36 pr-24">
          {
            params.page_no>1?
            <Link href={`/explore/genres/${params.genre_id}/${Number(params.page_no)-1}`} className='py-2 px-3 bg-gray-600 text-lg text-gray-300 w-fit mx-1 rounded-sm'>Go Back</Link>:''
          }
          <Link href={`/explore/genres/${params.genre_id}/${Number(params.page_no)+1}`} className="py-2 px-3 bg-blue-500 text-lg text-gray-100 w-fit mx-1 rounded-sm">Next Page</Link>
        </div>
    </div>
  )
}

export default page

async function getResult(id,pages){
  const movies = await getMoviesByGenre(id,pages);
  const shows = await getTvShowsByGenre(id,pages);
  return movies.concat(shows).sort(()=>Math.random-0.5);
}


async function getMoviesByGenre(id,pages){
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&page=${pages}`);
  if(!res.ok)throw new Error('Failed to fetch  movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01&page=${pages}`);
  if(!res2.ok)throw new Error('Failed to fetch  movies');
  const response2 = await res2.json();
  return response.results.concat(response2.results).sort(() => Math.random() - 0.5);
}

async function getTvShowsByGenre(id,pages){
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&page=${pages}`);
  if(!res.ok)throw new Error('Failed to fetch  tv shows');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01&page=${pages}`);
  if(!res2.ok)throw new Error('Failed to fetch  tv shows');
  const response2 = await res2.json();
  return response.results.concat(response2.results).sort(() => Math.random() - 0.5);
}


async function getPopularMovies(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2018-01-01&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch popular movies');
  if(!res2.ok)throw new Error('Failed to fetch popular movies');
  const response = await res.json();
  const response2 = await res2.json();
  return response.results.concat(response2.results);
}

async function getTopRatedMovies(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch top rated movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01&page=${page_no}`);
  if(!res2.ok)throw new Error('Failed to fetch top rated movies');
  const response2 = await res2.json();
  return response.results.concat(response2.results)
}

async function getUpcomingMovies(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch upcoming movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01&page=${page_no}`);
  if(!res2.ok)throw new Error('Failed to fetch upcoming movies');
  const response2 = await res2.json();
  return response.results.concat(response2.results);
}

async function getNowPlayingMovies(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch now playing movies');
  const response = await res.json();
  return response.results;
}

async function getPopularTvShows(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch popular tv shows');
  const response = await res.json();
  return response.results;
}

async function getTopRatedTvShows(page_no){
  const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&page=${page_no}`);
  if(!res.ok)throw new Error('Failed to fetch popular tv shows');
  const response = await res.json();
  return response.results;
}

