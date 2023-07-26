import SearchIcon from '@mui/icons-material/Search';

const loading = () => {
  return (
   <div className='flex flex-row items-center w-fit m-auto animate-pluse'>
        <SearchIcon className='text-5xl text-gray-400'/>
        <h3 className='text-2xl text-gray-400 font-medium ml-2'>Searching...</h3>
   </div>
  )
}

export default loading
