import HomeSwiper from "@/components/HomeSwiper"



export default async function Home() {
  var popularMovies =[];
  popularMovies=await getPopularMovies();

  return (
    <>
      <div className="w-screen h-96">
        <HomeSwiper popularMovies={popularMovies}/>
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