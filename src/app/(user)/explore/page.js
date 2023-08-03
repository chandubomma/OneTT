import ExploreSwiper from '@/components/ExploreSwiper';

export const revalidate = 86400;

const Explore = async() => {
  
   const genres= [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      
    
  ]
  for(let i=0;i<genres.length;i++){
    genres[i].movies = await getMoviesByGenre(genres[i].id)
    genres[i].shows = await getTvShowsByGenre(genres[i].id)
  }
  return (
    <div>
      <ExploreSwiper genres={genres}/>
    </div>
  )
}

export default Explore

async function getMoviesByGenre(id){
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}`);
  if(!res.ok)throw new Error('Failed to fetch  movies');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01`);
  if(!res2.ok)throw new Error('Failed to fetch  movies');
  const response2 = await res2.json();
  return response.results.slice(0,12).concat(response2.results.slice(0,12)).sort(() => Math.random() - 0.5);
}

async function getTvShowsByGenre(id){
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}`);
  if(!res.ok)throw new Error('Failed to fetch  tv shows');
  const response = await res.json();
  const res2 = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}&with_original_language=hi|kn|ml|ta|te&primary_release_date.gte=2010-01-01`);
  if(!res2.ok)throw new Error('Failed to fetch  tv shows');
  const response2 = await res2.json();
  return response.results.slice(0,12).concat(response2.results.slice(0,12)).sort(() => Math.random() - 0.5);
}
