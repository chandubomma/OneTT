import ShowSearchResluts from "@/components/ShowSearchResluts";
import NoSearchResults from "@/components/NoSearchResults";

const Search = async ({params}) => {
    const searchResults = await searchQuery(params.search);
    console.log(searchResults.length);
  return (
    <div>
        {
            searchResults.length>0?
            <div>
              <h2 className="text-2xl md:w-2/3 m-auto text-blue-500 font-bold mb-4 text-start pl-2 dark:text-white">Search results for {params.search} :</h2>
              <ShowSearchResluts searchResults={searchResults}/>
            </div>
            :
            <NoSearchResults query={params.search}/>
        }
    </div>
  )
}

export default Search


async function searchQuery(query){
    const resMvs = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`);
    if(!resMvs.ok)throw new Error('Failed to fetch  movies');
    const response1 = await resMvs.json();
    const resShows = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${query}`);
    if(!resShows.ok)throw new Error('Failed to fetch  movies');
    const response2 = await resShows.json();
    return response1.results.concat(response2.results);
}
