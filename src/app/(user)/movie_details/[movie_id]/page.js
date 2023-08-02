import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import MovieListSwiper from "@/components/MovieListSwiper";
import Link from "next/link";

const page = async({params}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const movie = await fetchMovieById(params.movie_id);
    const watchProviders = await fetchWatchProviders(params.movie_id);
    const similarMovies = await fetchSimilarMoveis(movie);
    const imgUrl = "https://image.tmdb.org/t/p/original"+movie.backdrop_path;
    const baseUrl =  "https://image.tmdb.org/t/p/original";
    const images = await fetchMovieImages(params.movie_id);
    const votePercent = movie.vote_average*10;
    const temp_date = movie.release_date.split('-');
    const releaseDate = temp_date[2]+" "+months[temp_date[1]-1]+", "+temp_date[0];
  return (
    <div>
      <div className="w-screen relative">
        <Image
            src={imgUrl}
            alt="image"
            width={1300}
            height={1000}
            priority
            className="md:h-[30rem] w-screen h-[26rem]"
        />

        <div className="absolute top-10 md:right-20 right-5">
            <div className=" text-white text-xl w-fit ml-1 bg-gradient-to-r from-blue-500 to-slate-500 shadow-md shadow-gray-500 font-semibold p-4 rounded-full">
            <h1>{votePercent.toPrecision(2)}%</h1>
            </div>
            <h5 className="text-white font-bold text-mg mt-2">({movie.vote_count} votes)</h5>
        </div>

        <div className="absolute md:top-[26rem] top-[20rem] md:left-[28rem] flex flex-row ml-2">
            {movie.genres.map((genre)=>(
                <div className="text-md text-gray-100 bg-gradient-to-r from-blue-500 to-slate-500 py-2 px-4 rounded-3xl mx-1">{genre.name}</div>
            ))}
        </div>

        <div className="absolute top-[20rem] md:left-[10rem] md:block hidden w-60 h-80 rounded-2xl shadow-blue-400 
            border-4 dark:shadow-black  overflow-hidden border-double shadow-lg">
            <ImageSlider images={images}/>
        </div>

      </div>
      <div className="md:ml-[28rem] mt-5">
            <h1 className="md:text-5xl text-3xl ml-2 text-blue-500 dark:text-white font-bold">{movie.title}</h1>
            <h4 className="text-gray-500 text-lg font-medium pl-3 mt-4">{releaseDate}</h4>
            <div className="mt-5">
              <Link href={watchProviders?watchProviders.link:""} className="text-lg font-medium text-gray-100 bg-gradient-to-r from-gray-500 to-slate-400 py-2 px-4 rounded-3xl ml-2">Watch now</Link>
            </div>
      </div>
      
      <div className="md:mt-20 md:ml-5 ml-2 mt-5">
        <h2 className="text-2xl text-blue-500 dark:text-white font-bold ">Overview </h2>
        <h3 className="text-xl text-gray-400 font-semibold tracking-wider mt-2">{movie.overview}</h3>
      </div>
      {watchProviders?
      <div className="md:mt-10 md:ml-5 ml-2 mt-5">
        <h2 className="text-2xl text-blue-500 dark:text-white font-bold ">Watch Options </h2>
        <h4 className="text-lg my-5 text-blue-500 dark:text-white font-semibold">Buy</h4>
        <div className="flex flex-row">
          {
            watchProviders.buy?
            watchProviders.buy.map(option=>(
              <a href={watchProviders.link} className="flex flex-col items-center justify-center mx-5">
                <Image
                src={baseUrl+option.logo_path}
                alt={option.provider_name}
                width={240}
                height={240}
                className="rounded-full  w-12 h-12"
                />
                <h5 className="text-sm text-gray-500 font-bold mt-4">{option.provider_name}</h5>
              </a>

            )):<h4 className="text-md text-gray-400 font-semibold">Not Available</h4>
          }
        </div>
        <h4 className="text-lg my-5 text-blue-500 dark:text-white font-semibold">Rent</h4>
        <div className="flex flex-row ">
          {
            watchProviders.rent?
            watchProviders.rent.map(option=>(
              <a href={watchProviders.link} className="flex flex-col items-center justify-center mx-5">
                <Image
                src={baseUrl+option.logo_path}
                alt={option.provider_name}
                width={240}
                height={240}
                className="rounded-full  w-12 h-12"
                />
                <h5 className="text-sm text-gray-500 font-bold mt-4">{option.provider_name}</h5>
              </a>

            )):<h4 className="text-md text-gray-400 font-semibold">Not Available</h4>
          }
        </div>
        <h4 className="text-lg my-5 text-blue-500 dark:text-white font-semibold">Stream</h4>
        <div className="flex flex-row">
          {
            watchProviders.flatrate?
            watchProviders.flatrate.map(option=>(
              <a href={watchProviders.link} className="flex flex-col items-center justify-center mx-5">
                <Image
                src={baseUrl+option.logo_path}
                alt={option.provider_name}
                width={240}
                height={240}
                className="rounded-full  w-12 h-12"
                />
                <h5 className="text-sm text-gray-500 font-bold mt-4">{option.provider_name}</h5>
              </a>

            )):<h4 className="text-md text-gray-400 font-semibold">Not Available</h4>
          }
        </div>
        <h4 className="text-lg my-5 text-blue-500 dark:text-white font-semibold">Ads</h4>
        <div className="flex flex-row ">
          {
            watchProviders.ads?
            watchProviders.ads.map(option=>(
              <a href={watchProviders.link} className="flex flex-col items-center justify-center mx-5">
                <Image
                src={baseUrl+option.logo_path}
                alt={option.provider_name}
                width={240}
                height={240}
                className="rounded-full  w-12 h-12"
                />
                <h5 className="text-sm text-gray-500 font-bold mt-4">{option.provider_name}</h5>
              </a>

            )):<h4 className="text-md text-gray-400 font-semibold">Not Available</h4>
          }
        </div>
      </div>:''}

      <div className="pt-6 dark:shadow-inner">
        <h1 className="text-blue-500 dark:text-white font-bold text-2xl mb-4 md:pl-5 pl-2">Similar Movies</h1>
        <MovieListSwiper MovieList={similarMovies} />
      </div>

    </div>
  )
}

export default page

async function fetchMovieById(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
    if(!res.ok)console.log('failed to fetch movie');
    const response = await res.json()
    return response
}

async function fetchMovieImages(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_API_KEY}`)
    if(!res.ok)console.log('failed to fetch movie images');
    const response = await res.json()
    return response.backdrops.slice(0,5);
}

async function fetchWatchProviders(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.TMDB_API_KEY}`)
  if(!res.ok)console.log('failed to fetch movie images');
  const response = await res.json()
  return response.results.IN;
}

async function fetchSimilarMoveis(movie){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=${movie.original_language}`)
  if(!res.ok)console.log('failed to fetch movie images');
  const response = await res.json()
  return response.results;
}