import MovieCard from "./MovieCard"

const ShowSearchResluts = ({searchResults}) => {
  return (
    <div className=" dark:bg-gradient-to-l dark:from-slate-900 dark:to-blue-900">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-y-6 gap-y-1 w-fit md:w-2/3 m-auto pt-5 justify-items-center justify-center'>
        {searchResults.map(result=>(
            <MovieCard key={result.id} movie={result}/>
        ))}
        </div>
    </div>
    
  )
}

export default ShowSearchResluts
