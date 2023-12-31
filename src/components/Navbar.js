'use client'

import MenuIcons from "./MenuIcons";
import Menu from "./Menu";
import Theme from "./Theme";
import { useRef,useState} from "react";

import { useSession} from "next-auth/react";


const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const session = useSession();
  return (
    <div className="h-16  w-screen z-50 shadow-md shadow-blue-500 dark:shadow-slate-200 fixed flex justify-between bg-white dark:bg-gradient-to-l dark:from-slate-950 dark:to-blue-950">
        <div className="flex felx-row">

            <div className="ml-3 my-2 md:hidden mr-11">
                <MenuIcons menuRef={menuRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
        
            <h1 className="text-gray-400 text-5xl md:ml-3 md:my-1 md:text-5xl font-extrabold "><span className="text-blue-500 dark:text-white">O</span>ne<span className='text-blue-500 dark:text-white'>TT</span></h1>
        </div>
        <Menu menuRef={menuRef} setMenuOpen={setMenuOpen}/>
      <div className="flex flex-row my-2">
        <Theme/>
        {
          session.data?
          <div className="mr-3">
            {
              session.data.user.image?
              <img
                src = {session.data.user.image}
                alt = ''
                width={45}
                height = {45}
                className="rounded-full"
              />:
              <div className=" py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-500 to-gray-400 text-gray-100 font-medium text-xl text-center">{session.data.user.name[0]}</div>
            }
          </div>:
          <div> <img
          src='/onett_user_profile.jpeg'
          alt="user profile"
          className="w-12 h-12 rounded-full mr-4"
        /></div>
        }
        
      </div>
      
    </div>
  )
}

export default Navbar
