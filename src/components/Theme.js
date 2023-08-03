'use client'
import {useState,useEffect} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const Theme = () => {

    const [darkMode,setDarkMode] = useState(false);

    useEffect(()=>{

        const root = window.document.documentElement;

        if(darkMode){
            root.classList.add('dark');            
        }else{
            root.classList.remove('dark');
        }
    },[darkMode]);

    const handleDarkMode = ()=>{
       setDarkMode(true);
    }

    const handleLightMode = ()=>{
       setDarkMode(false);
    }
    
  return (
    <div className='hover:cursor-pointer'>
      {
            darkMode?
            <div onClick={handleLightMode}><LightModeIcon className=" text-white mt-3.5 mr-4"/></div>:
            <div onClick={handleDarkMode}><DarkModeIcon className="text-gray-400 mt-3.5 mr-4"/></div>
        }
    </div>
  )
}

export default Theme
