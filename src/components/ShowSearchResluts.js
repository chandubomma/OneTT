'use client'
import { useState,useEffect } from "react"
import MovieCard from "./MovieCard"
import SortAndFilters from "./SortAndFilters"

const ShowSearchResluts = ({searchResults}) => {
    const [sortBy,setSortBy] = useState("none");
    const [language,setLanguage] = useState({All:true});
    const [category,setCategory] = useState("All");
    const [genresFilter,setGenresFilter] = useState({});
    const [rating,setRating] = useState(0);
    const [runtime,setRuntime] = useState(0);
  var results = [...searchResults];
  sortByHandler(sortBy,results);
  results=categoryHandler(category,results);
  results=languageHandler(language,results);
  return (
    <div className="flex md:flex-row flex-col">
      <div className="">
        <SortAndFilters genres={genres}
          setSortBy={setSortBy}
          setLanguage={setLanguage}
          setCategory={setCategory}
          setGenresFilter={setGenresFilter}
          language={language}
          genresFilter={genresFilter}
        />
      </div>
      <div className="  w-full">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-y-6 gap-y-1 w-fit m-auto pt-5 justify-items-center justify-center'>
        {results.map(result=>(
            <MovieCard key={result.id} movie={result}/>
        ))}
        </div>
      </div>
    </div>
    
    
  )
}

export default ShowSearchResluts

function sortByHandler(sortBy,searchResults){
  switch(sortBy){
    case 'RD' : {
        searchResults.sort((m1,m2)=>m2.vote_average-m1.vote_average);
        break;
    }
    case 'RA' : {
      searchResults.sort((m1,m2)=>m1.vote_average-m2.vote_average);
      break;
    }
    case 'TAZ': {
      searchResults.sort((m1,m2)=>(m1.title?m1.title:m1.name).localeCompare(m2.title?m2.title:m2.name));
      break;
    }
    case 'TZA': {
      searchResults.sort((m2,m1)=>(m1.title?m1.title:m1.name).localeCompare(m2.title?m2.title:m2.name));
      break;
    }
    case 'OAF' : {
      searchResults.sort((m1,m2)=>(m1.release_date?m1.release_date:m1.first_air_date).localeCompare(m2.release_date?m2.release_date:m2.first_air_date));
      break;
    }
    case 'NAF' : {
      searchResults.sort((m2,m1)=>(m1.release_date?m1.release_date:m1.first_air_date).localeCompare(m2.release_date?m2.release_date:m2.first_air_date));
      break;
    }
  }
}

function categoryHandler(category,results){
  switch(category){
    case 'movies' : {
      results = results.filter((result)=>result.title!=null);
      break;
    }
    case 'shows' : {
      results = results.filter((result)=>result.name!=null);
      break;
    }
  }
  return results
}

function languageHandler(language,results){
  if(language.All==true)return results;
  const newResults=[]
  Object.keys(language).forEach(lan=>{
    if(language[lan]==true){
      results.forEach(result=>{
        if(result.original_language==lan)newResults.push(result);
      })
    }
  })
  return newResults;
}

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
