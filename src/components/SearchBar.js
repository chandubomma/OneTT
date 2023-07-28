'use client'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {useState} from 'react'



const SearchBar = ({searchHandler}) => {
    const [searchQuery,setSearchQuery] = useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        searchHandler(searchQuery.replace(" ",""));
    }
    
    
  return (
    <div className='w-screen h-96 bg-gradient-to-b from-blue-400 to-white dark:bg-none
                    flex flex-col justify-center items-center'>
        <h1 className='md:text-2xl text-lg mb-8 font-bold text-blue-100 dark:text-white'>Search for movies, tv shows, many more...</h1>  
        <div className='w-fit h-fit flex justify-center relative'>
            <SearchIcon className='absolute left-4 top-4 text-2xl text-gray-500 dark:text-gray-400'/>
            <MicIcon className='absolute right-4 top-4 text-2xl text-gray-500 dark:text-gray-400'/>
            <form method='GET' onSubmit={(e)=>handleSubmit(e)}>
                <input type='text' onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} name='search' className='dark:border-gray-300 border-2 rounded-full w-96 md:w-[40rem] h-12
                    focus:shadow-gray-400 focus:shadow-lg dark:focus:shadow-black dark:focus:shadow-xl focus:outline-none text-gray-500 font-semibold px-12'/>
            </form>
           
        </div>
       
    </div>
  )
}

export default SearchBar
