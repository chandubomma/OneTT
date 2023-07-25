'use client'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useRouter } from 'next/router';


const SearchBar = () => {
    
  return (
    <div className='w-screen h-96 bg-gradient-to-b from-blue-400 to-white dark:bg-none
                    flex flex-row justify-center items-center'>
        <div className='w-fit h-fit flex justify-center relative'>
            <SearchIcon className='absolute left-4 top-4 text-2xl text-gray-500 dark:text-gray-400'/>
            <MicIcon className='absolute right-4 top-4 text-2xl text-gray-500 dark:text-gray-400'/>
            <form>
                <input type='text' className='dark:border-gray-300 border-2 rounded-full w-96 md:w-[40rem] h-12
                    focus:shadow-gray-400 focus:shadow-lg dark:focus:shadow-black dark:focus:shadow-xl focus:outline-none text-gray-500 font-semibold px-12'/>
            </form>
           
        </div>
       
    </div>
  )
}

export default SearchBar
