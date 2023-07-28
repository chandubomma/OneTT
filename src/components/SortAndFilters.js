import React from 'react'

const SortAndFilters = () => {
  return (
    <div className='flex md:flex-col md:w-[20rem] w-screen h-fit px-8 pr-10 py-6 pb-16 bg-gradient-to-r from-blue-300 to-gray-300 pt-12
            dark:text-white ml-5 rounded-2xl shadow-lg shadow-gray-400 dark:bg-gradient-to-l dark:from-slate-600 dark:to-blue-900 dark:shadow-black'>
      <div className='w-full font-semibold text-gray-500 text-md'>
        <select defaultValue="none" className='border-4 border-white focus:outline-none p-2 rounded-lg block w-full'>
            <option value="none">--Sort By--</option>
            <option value="RD">Rating Descending</option>
            <option value="RA">Rating Ascending</option>
            <option value="NAF">New Arrivals First</option>
            <option value="OAF">Old Arrivals First</option>
            <option value="TAZ">Title (A-Z)</option>
            <option value="TZA">Title (z-A)</option>
        </select>
      </div>
      <div className='md:mt-5'>
        <h1 className='md:text-lg font-semibold text-gray-600'>Filters</h1>
        <div className='pl-4'>
            <h3 className='md:text-md font-semibold text-gray-600'>Language</h3>
           <div className='grid grid-cols-2 gap-y-2 pl-2 text-md font-medium text-gray-500 p-2 py-4'>
                <div className=''>
                    <input type='checkbox' id='All' value="All" className='w-4 h-4 mr-2' checked />
                    <label forHtml="All">All</label>
                </div>
                <div>
                    <input type='checkbox' id='en' value="en" className='w-4 h-4 mr-2'/>
                    <label forHtml="en">English</label>
                </div>
                <div>
                    <input type='checkbox' id='hi' value="hi" className='w-4 h-4 mr-2'/>
                    <label forHtml="hi">Hindi</label>
                </div>
                <div>
                    <input type='checkbox' id='kn' value="kn" className='w-4 h-4 mr-2'/>
                    <label forHtml="kn">Kannada</label>
                </div>
                <div>
                    <input type='checkbox' id='ml' value="ml" className='w-4 h-4 mr-2'/>
                    <label forHtml="ml">Malyalam</label>
                </div>
                <div>
                    <input type='checkbox' id='ta' value="ta" className='w-4 h-4 mr-2'/>
                    <label forHtml="ta">Tamil</label>
                </div>
                <div>
                    <input type='checkbox' id='te' value="te" className='w-4 h-4 mr-2'/>
                    <label forHtml="te">Telugu</label>
                </div>
           </div>
        </div>
        <div className='w-full font-semibold text-gray-500 text-md md:mt-3'>
            <h1 className='text-gray-600 pl-2 font-semibold mb-2'>Category</h1>
            <select defaultValue='All' className='border-4 border-white focus:outline-none p-2 rounded-lg block w-full'>
                <option value='All'>All</option>
                <option value='movies'>Movies</option>
                <option value='shows'>TV Shows</option>
            </select>
        </div>
        <div className='w-full font-semibold text-gray-600 text-md md:mt-5'>
            <h3 className='pl-2'>Rating</h3>
            <input type='range' min={0} max={100} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default SortAndFilters
