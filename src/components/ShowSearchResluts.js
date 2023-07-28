'use client'
import { useState } from "react"
import MovieCard from "./MovieCard"
import SortAndFilters from "./SortAndFilters"

const ShowSearchResluts = ({searchResults}) => {
    const [sortBy,setSortBy] = useState("none");
    const [language,setLanguage] = useState("All");
    const [category,setCategory] = useState("All");
    const [rating,setRating] = useState(0);
    const [runtime,setRuntime] = useState(0);

  return (
    <div className="flex md:flex-row flex-col">
      <div className="">
        <SortAndFilters/>
      </div>
      <div className="  w-full">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-y-6 gap-y-1 w-fit m-auto pt-5 justify-items-center justify-center'>
        {searchResults.map(result=>(
            <MovieCard key={result.id} movie={result}/>
        ))}
        </div>
      </div>
    </div>
    
    
  )
}

export default ShowSearchResluts
