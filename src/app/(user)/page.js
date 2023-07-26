import HomeSwiper from "@/components/HomeSwiper"
import MovieListSwiper from "@/components/MovieListSwiper";
import RevealOnScrollFromRight from "@/components/RevealOnScrollFromRight";
import RevealOnScrollOpacity from "@/components/RevealOnScrollOpacity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;


export default async function Home() {
  var popularMovies =[];
  popularMovies = await getPopularMovies();
  var topRatedMovies = await  getTopRatedMovies();
  var upcomingMovies = await getUpcomingMovies();
  var nowPlayingMovies = await getNowPlayingMovies();
  var popularTvShows = await getPopularTvShows();;
  var topRatedTvShows = await  getTopRatedTvShows();

  return (
    <>
      <div className="w-screen h-96">
        <HomeSwiper popularMovies={popularMovies}/>
      </div>
      <div className="pt-6 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Upcoming Movies</h1>
        <MovieListSwiper MovieList={upcomingMovies} />
      </div>
      <div className="pt-3 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Now Playing Movies</h1>
        <MovieListSwiper MovieList={nowPlayingMovies} />
      </div>
      <div className="pt-4 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Top Rated Movies</h1>
        <MovieListSwiper MovieList={topRatedMovies} />
      </div>
      <div className="pt-4 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Popular TV Shows</h1>
        <MovieListSwiper MovieList={popularTvShows} />
      </div>
      <div className="pt-4 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 pl-5">Top Rated Shows</h1>
        <MovieListSwiper MovieList={topRatedTvShows} />
      </div>
      <div className="w-screen relative flex flex-col md:flex-row justify-center md:h-full h-fit mt-10" >
        <div className="md:w-1/2 w-full min-h-60 hidden md:inline-block dark:md:hidden pl-28">
            <RevealOnScrollOpacity>
                <Image
                  src="/onett_image1.jpg"
                  alt="Picture"
                  width={600}
                  height={300}
                  priority
                />
            </RevealOnScrollOpacity>
        </div>
       
        <div className="md:w-1/2 w-screen dark:w-screen md:min-h-60 h-fit flex items-center text-center overflow-x-hidden md:dark:pl-40 justify-center  pt-32">
          <RevealOnScrollFromRight>

            <div className="flex items-center  justify-center md:dark:w-screen md:dark:pl-96">
                <h1 className="md:text-5xl text-4xl text-blue-500 dark:text-white font-bold inline-block">
                        Unlock
                </h1>
            </div>
            <div className="flex items-center  justify-center md:dark:pl-96">
                <h1 className="md:text-5xl text-4xl text-blue-500  dark:text-white font-bold inline-block mt-2">
                    the World of Cinema.
                </h1>
            </div>
            <div className="flex items-center  justify-center md:dark:pl-96">
                <h1 className="md:text-5xl text-4xl text-blue-500  dark:text-white font-bold inline-block mt-2">
                        OneTT  
                </h1>
            </div>
            <div className="flex items-center  justify-center md:dark:pl-96">
                <h1 className="md:text-5xl text-4xl text-blue-500  dark:text-white font-bold inline-block mt-2">
                    Your Ultimate Movie
                </h1>
            </div>
            <div className="flex items-center  justify-center md:dark:pl-96">
                <h1 className="md:text-5xl text-4xl text-blue-500  dark:text-white font-bold inline-block mt-2">
                    Companion
                </h1>
            </div>
            <div className="flex flex-row m-2 text-xl font-medium justify-center mt-8  md:dark:pl-96">
                <Link href="/login" className="dark:bg-white bg-gray-300 px-5 md:py-2 py-3 mx-2 rounded-lg text-blue-500 w-1/2 md:w-auto">Login</Link>
                <Link href="/register" className="bg-blue-400 px-5 md:py-2 py-3 mx-2 rounded-lg text-white w-1/2 md:w-auto">Register</Link>
            </div>
            
          </RevealOnScrollFromRight>
        </div>
      </div>

      <div className="w-screen h-fit  flex justify-center dark:text-white text-center md:text-5xl text-4xl opacity-100 md:opacity-100 mt-20  text-blue-500 font-bold ">
        <RevealOnScrollOpacity>
          <h1 className="">Movies , TV Shows many More...</h1>
          <h1 className="mt-4">Add to watchlist, favourites</h1>
          <Link href="/explore" className="bg-blue-400 inline-block text-xl mt-8 font-medium px-5 md:py-2 py-3 mx-2 rounded-lg text-white w-1/2 md:w-auto">Explore Now</Link>
        </RevealOnScrollOpacity>
      </div>
      
    </>
  )
}


async function getPopularMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2015-01-01`);
  if(!res.ok)throw new Error('Failed to fetch popular movies');
  if(!res2.ok)throw new Error('Failed to fetch popular movies');
  const response = await res.json();
  const response2 = await res2.json();
  return response.results.sort(() => Math.random() - 0.5).slice(0,6).concat(response2.results.sort(() => Math.random() - 0.5).slice(0,6)).sort(() => Math.random() - 0.5);
}

async function getTopRatedMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch top rated movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01`);
  if(!res2.ok)throw new Error('Failed to fetch top rated movies');
  const response2 = await res2.json();
  return response.results.slice(0,12).concat(response2.results.slice(0,12)).sort(() => Math.random() - 0.5);
}

async function getUpcomingMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch upcoming movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01`);
  if(!res2.ok)throw new Error('Failed to fetch upcoming movies');
  const response2 = await res2.json();
  return response.results.slice(0,12).concat(response2.results.slice(0,12)).sort(() => Math.random() - 0.5);
}

async function getNowPlayingMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch now playing movies');
  const response = await res.json();
  return response.results;
}

async function getPopularTvShows(){
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch popular tv shows');
  const response = await res.json();
  return response.results;
}

async function getTopRatedTvShows(){
  const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch popular tv shows');
  const response = await res.json();
  return response.results;
}
