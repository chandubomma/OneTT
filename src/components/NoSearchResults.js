'use client'
import { Player } from '@lottiefiles/react-lottie-player';

const NoSearchResults = ({query}) => {
  return (
    <div>
        <h1 className='text-xl text-red-500 font-semibold w-screen text-center mb-8'>No Search Results Found for {query}!</h1>
        <Player
            src="https://lottie.host/7a632f7f-6ac4-4460-8442-0194b6439f21/1DoT8DjJjR.json"
            className='player  w-60 h-60'
            autoplay={true}
            loop
        />
    </div>
  )
}

export default NoSearchResults
