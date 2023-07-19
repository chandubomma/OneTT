'use client'

import MenuIcons from "./MenuIcons";
import Menu from "./Menu";
import Theme from "./Theme";
import { useRef,useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const menuRef = useRef(null);
  return (
    <div className="h-16  w-screen shadow-md shadow-blue-500 dark:shadow-slate-200 fixed flex justify-between">
        <div className="flex felx-row">

            <div className="ml-3 my-2 md:hidden mr-11">
                <MenuIcons menuRef={menuRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
        
            <h1 className="text-gray-400 text-5xl md:ml-3 md:my-1 md:text-5xl font-extrabold"><span className="text-blue-500">O</span>ne<span className='text-blue-500'>TT</span></h1>
        </div>
        <Menu menuRef={menuRef} setMenuOpen={setMenuOpen}/>
      <div className="flex flex-row my-2">
        <Theme/>
        <div><AccountCircleIcon className="dark:text-blue-300 text-5xl text-gray-400 mr-3"/></div>
      </div>
      
    </div>
  )
}

export default Navbar
