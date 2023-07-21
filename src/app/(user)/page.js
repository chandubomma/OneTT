import HomeSwiper from "@/components/HomeSwiper"
import MovieListSwiper from "@/components/MovieListSwiper";



export default async function Home() {
  var popularMovies =[];
  popularMovies = await getPopularMovies();
  var topRatedMovies = await  getTopRatedMovies();

  return (
    <>
      <div className="w-screen h-96">
        <HomeSwiper popularMovies={popularMovies}/>
      </div>
      <div className="pt-6 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Top Rated Movies</h1>
        <MovieListSwiper MovieList={topRatedMovies} />
      </div>
      
    </>
  )
}


async function getPopularMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch popular movies');
  const response = await res.json();
  return response.results.slice(0,10);
}

async function getTopRatedMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch top rated movies');
  const response = await res.json();
  return response.results;
}