import Image from "next/image"

const HomeSwiperSlide = ({movie}) => {
    const img_url="https://image.tmdb.org/t/p/original"
  return (
    <div>
      <Image
      src={img_url+`${movie.backdrop_path}`}
      alt="Picture of the movie"
      width={1200}
      height={800}
      priority
      className="h-96 w-screen "
    />
    </div>
  )
}

export default HomeSwiperSlide
