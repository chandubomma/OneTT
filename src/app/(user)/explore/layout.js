'use client'
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';

const layout = ({children}) => {
    const router = useRouter();
    const searchHandler = (searchQuery)=>{
       if(searchQuery.length>0){
        router.push(`/explore/${searchQuery}`)
       }
    }


  return (
    <div>
        <SearchBar searchHandler={searchHandler}/>
        {children}
    </div>
  )
}

export default layout
