'use client'
import { Player } from '@lottiefiles/react-lottie-player'

const PageLoading = () => {
  return (
    <div className='w-screen h-screen'>
      <Player
        src='https://lottie.host/?file=d834fe99-e538-4710-9ee1-93c54f7a004c/m8jTR3kVAc.json'
        autoplay={true}
        loop
        className='player w-full h-full'
      />
    </div>
  )
}

export default PageLoading
