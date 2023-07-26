import ExploreSwiper from '@/components/ExploreSwiper';

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
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
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
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
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
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    
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
  return response.results.reverse();
}

async function getTvShowsByGenre(id){
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}`);
  if(!res.ok)throw new Error('Failed to fetch  tv shows');
  const response = await res.json();
  return response.results;
}
