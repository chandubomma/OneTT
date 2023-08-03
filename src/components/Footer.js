
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-gray-500 text-white mt-32  dark:bg-gradient-to-r dark:from-blue-900 dark:to-gray-800 overflow-x-hidden">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="pl-4">
            <h3 className="font-semibold text-xl mb-4">About OneTT</h3>
            <h1 className="text-gray-400 text-5xl md:my-6 md:text-5xl font-extrabold "><span className="text-white dark:text-white">O</span>ne<span className='text-white dark:text-white'>TT</span></h1>
            <p className="text-gray-300 font-medium mt-2">
              OneTT is a Movies, shows companion website,<br/> providing information about<br/> movies, TV shows, and many more.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="https://www.netflix.com/in/" className="text-gray-300 hover:text-white">Netflix</a>
              </li>
              <li>
                <a href="https://www.primevideo.com/storefront/ref=atv_hm_pri_c_9zZ8D2_me_hom?contentType=home&contentId=store" className="text-gray-300 hover:text-white">Prime Video</a>
              </li>
              <li>
                <a href="https://www.hotstar.com/in/home" className="text-gray-300 hover:text-white">Disney+Hotstar</a>
              </li>
              <li>
                <a href="https://www.sonyliv.com/" className="text-gray-300 hover:text-white">Sony Liv</a>
              </li>
              <li>
                <a href="https://www.jiocinema.com/" className="text-gray-300 hover:text-white">Jio Cinema</a>
              </li>
            </ul>
          </div>
          <div className="pl-4">
            <h3 className="font-semibold text-xl mb-4">Connect with Us</h3>
            <div className="flex ">
                <div>
                    <textarea className="p-2 rounded-lg focus:outline-blue-700 text-gray-400 resize-none" placeholder="Please write us a feedback!" rows="4" cols={30}/><br/>
                    <button className="bg-white py-2 px-3 rounded-xl text-gray-500 mt-2 font-medium">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-gray-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} OneTT. All rights reserved.</p>
          <p className="text-gray-300">created by Chandu Bomma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

