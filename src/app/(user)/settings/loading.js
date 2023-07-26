const Loading = () => {
    return (
     <div className="w-fit m-auto h-screen flex  items-center justify-center animate-pulse">
          <div className="w-8 h-8 bg-transparent border-4 border-gray-400 border-e-gray-100 rounded-full animate-spin"></div>
          <h2 className="text-3xl text-gray-400 ml-2">Loading...</h2>
     </div>
    )
  }
  
  export default Loading
