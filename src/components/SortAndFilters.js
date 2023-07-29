'use client'
import TuneIcon from '@mui/icons-material/Tune';
import { useRef,useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const SortAndFilters = ({genres,
                        setSortBy,
                        setLanguage,
                        setCategory,
                        language,
                        genresFilter,
                        setGenresFilter
                        }) => {

    const myref = useRef(null);

    const filtersHandler = ()=>{
        myref.current.classList.remove('hidden');
    }

    const closeFilters = ()=>{
        myref.current.classList.add('hidden');
    }

    const handleLanguage = (e)=>{
        setLanguage({
            ...language,
            [e.target.value] : e.target.checked
        })
        
    }

    const handleGenres = (e)=>{
        const active = ['bg-gradient-to-r','from-blue-600','to-gray-400','text-white'];
        const notActive = ['bg-none','text-gray-500'];
        if(e.target.value=='true'){
            active.forEach(cls=>{
                e.target.classList.remove(cls);
            })
            notActive.forEach(cls=>{
                e.target.classList.add(cls);
            })
            e.target.value='false';
        }else{
            active.forEach(cls=>{
                e.target.classList.add(cls);
            })
            notActive.forEach(cls=>{
                e.target.classList.remove(cls);
            })
            e.target.value='true';
        }
        setGenresFilter({
            ...genresFilter,
            [e.target.name]:e.target.value
        })
    }
   
  return (


    <div className='flex top-screen justify-between items-center flex-col md:w-[20rem] w-screen h-fit md:px-8 px-3 pr-10 py-6 md:pb-10 bg-gradient-to-r from-blue-300 md:to-gray-300 to-gray-200 pt-12
            dark:text-white md:ml-5 md:rounded-2xl md:shadow-lg shadow-gray-400 dark:bg-gradient-to-l dark:from-slate-600 dark:to-blue-900 dark:shadow-black
                '>
      <div className='w-full font-semibold text-gray-500 text-md '>
        <select defaultValue="none"  className='border-4 border-white focus:outline-none p-2 py-3 md:py-2 rounded-lg block w-full' onClick={(e)=>setSortBy(e.target.value)}>
            <option value="none">--Sort By--</option>
            <option value="RD">Rating Descending</option>
            <option value="RA">Rating Ascending</option>
            <option value="NAF">New Arrivals First</option>
            <option value="OAF">Old Arrivals First</option>
            <option value="TAZ">Title (A-Z)</option>
            <option value="TZA">Title (Z-A)</option>
        </select>
      </div>
      
      <div className='mt-5'>
        <h1 className='md:text-lg font-semibold text-gray-600 dark:text-gray-200 text-center w-full' onClick={()=>filtersHandler()}>Filters <TuneIcon/></h1>
        <div ref={myref} className="md:block hidden mt-2">
            <div className='md:hidden flex justify-end' onClick={()=>closeFilters()}>
                <CloseIcon/>
            </div>
            <div className='pl-4'>
                <h3 className='md:text-md font-semibold text-gray-600 dark:text-gray-300'>Language</h3>
            <div className='grid grid-cols-2 gap-y-2 pl-2 text-md font-medium text-gray-500 dark:text-gray-400 p-2 py-4'>
                    <div className=''>
                        <input type='checkbox' id='All' value="All" className='w-4 h-4 mr-2' defaultChecked onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="All">All</label>
                    </div>
                    <div>
                        <input type='checkbox' id='en' value="en" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="en">English</label>
                    </div>
                    <div>
                        <input type='checkbox' id='hi' value="hi" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="hi">Hindi</label>
                    </div>
                    <div>
                        <input type='checkbox' id='kn' value="kn" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="kn">Kannada</label>
                    </div>
                    <div>
                        <input type='checkbox' id='ml' value="ml" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="ml">Malyalam</label>
                    </div>
                    <div>
                        <input type='checkbox' id='ta' value="ta" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="ta">Tamil</label>
                    </div>
                    <div>
                        <input type='checkbox' id='te' value="te" className='w-4 h-4 mr-2' onChange={(e)=>handleLanguage(e)}/>
                        <label forhtml="te">Telugu</label>
                    </div>
            </div>
            </div>
            <div className='w-full font-semibold text-gray-500 text-md mt-3'>
                <h1 className='text-gray-600 pl-2 font-semibold mb-2 dark:text-gray-300'>Category</h1>
                <select defaultValue="All" className='border-4 border-white focus:outline-none p-2 py-3 md:py-2 rounded-lg block w-full' onClick={(e)=>setCategory(e.target.value)}>
                    <option value='All' selected>All</option>
                    <option value='movies'>Movies</option>
                    <option value='shows'>TV Shows</option>
                </select>
            </div>

            {
                genres?
                <div className='w-full mt-5 pl-2 text-gray-600 font-semibold text-md mb-10'>
                    <h3 className='dark:text-gray-300'>Genres</h3>
                    <div className='flex flex-wrap w-full mt-3'>
                        {
                            genres.map(genre=>(
                                <button key={genre.id} name={genre.id} defaultValue={'false'} onClick={(e)=>handleGenres(e)} className='border-2 p-1.5 px-4 text-gray-500 bg-none rounded-2xl mx-2 my-1 border-gray-400'>{genre.name}</button>
                            ))
                        }
                    </div>
                </div>:''
            }
        </div>
       
      </div>
    </div>
  )
}

export default SortAndFilters
