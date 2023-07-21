import HomeSwiper from "@/components/HomeSwiper"
import MovieListSwiper from "@/components/MovieListSwiper";
import ReavealOnScroll from "@/components/ReavealOnScroll";
import ReavealOnScrollFromLeft from "@/components/RevealOnScrollFromLeft";
import Image from "next/image";


export default async function Home() {
  var popularMovies =[];
  popularMovies = await getPopularMovies();
  var topRatedMovies = await  getTopRatedMovies();
  var upcomingMovies = await getUpcomingMovies();
  var nowPlayingMovies = await getNowPlayingMovies();

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
      <div className="w-screen relative flex flex-col md:flex-row" style={{height:"900px"}}>
        <div className="md:w-1/2 w-full min-h-60 hidden md:inline-block">
            <ReavealOnScrollFromLeft direction='right'>
                <Image
                  src="/onett_image1.jpg"
                  alt="Picture"
                  width={600}
                  height={300}
                  priority
                  className=" w-full h-96 md:w-full md:h-full"
                />
            </ReavealOnScrollFromLeft>
        </div>
       
        <div className="md:w-1/2 w-full min-h-60 flex items-center  justify-center md:pt-0 pt-10 ">
          <ReavealOnScroll>

            <div className="flex items-center  justify-center">
                <h1 className="md:text-5xl text-4xl text-blue-500 font-extrabold inline-block">
                        Unlock
                </h1>
            </div>
            <div className="flex items-center  justify-center">
                <h1 className="md:text-5xl text-4xl text-blue-500 font-extrabold inline-block mt-2">
                    the World of Cinema.
                </h1>
            </div>
            <div className="flex items-center  justify-center">
                <h1 className="md:text-5xl text-4xl text-blue-500 font-extrabold inline-block mt-2">
                        OneTT : 
                </h1>
            </div>
            <div className="flex items-center  justify-center">
                <h1 className="md:text-5xl text-4xl text-blue-500 font-extrabold inline-block mt-2">
                    Your Ultimate Movie
                </h1>
            </div>
            <div className="flex items-center  justify-center">
                <h1 className="md:text-5xl text-4xl text-blue-500 font-extrabold inline-block mt-2">
                    Companion
                </h1>
            </div>
            
          </ReavealOnScroll>
        </div>
      </div>

      <div className="w-screen h-screen">
        <h1>footer</h1>
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

async function getUpcomingMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch upcoming movies');
  const response = await res.json();
  return response.results;
}

async function getNowPlayingMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`);
  if(!res.ok)throw new Error('Failed to fetch now playing movies');
  const response = await res.json();
  return response.results;
}