import Image from "next/image"
import Link from "next/link";

const HomeSwiperSlide = ({movie}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const imgUrl="https://image.tmdb.org/t/p/original"+movie.backdrop_path;
    const temp_date = movie.release_date.split('-');
    const releaseDate = temp_date[2]+" "+months[temp_date[1]-1]+", "+temp_date[0];
    const votePercent = movie.vote_average*10;
  return (
    <div className="realative">
      <div className="absolute top-10 md:right-20 right-5">
        <div className=" text-white text-xl w-fit ml-1 bg-gradient-to-r from-blue-500 to-slate-500 shadow-md shadow-gray-500 font-semibold p-4 rounded-full">
          <h1>{votePercent}%</h1>
        </div>
        <h5 className="text-white font-bold text-mg mt-2">({movie.vote_count} votes)</h5>
      </div>
      
      <div className="absolute top-52 md:top-60 left-5">
        <h1 className="z-40 text-white font-bold text-3xl md:text-4xl ">{movie.title}</h1>
        <h4 className="text-white text-sm font-medium pl-1 mt-1">{releaseDate}</h4>
        <Link href="#" className="text-white text-md inline-block bg-blue-500 dark:bg-gradient-to-r dark:from-blue-600 dark:to-slate-600
         py-2 px-4 mt-3 rounded-3xl hover:bg-white hover:text-blue-500 ease-out duration-300 font-medium">
          View Movie
        </Link>
      </div>
      
      <Image
      src={imgUrl}
      alt="Picture of the movie"
      width={1200}
      height={700}
      priority
      className="h-96 w-screen "
    />
      
    </div>
  )
}

export default HomeSwiperSlide
