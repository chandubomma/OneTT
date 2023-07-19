import React from 'react'
import Link from 'next/link'

const Menu = ({menuRef,setMenuOpen}) => {
    const handleClick = ()=>{
        menuRef.current.classList.add("-left-full")
        menuRef.current.classList.remove("left-0")
        setMenuOpen(false);
    }
  return (
    <div ref={menuRef} className="flex flex-col md:flex-row text-2xl text-blue-500 dark:text-blue-300 dark:md:text-blue-500 font-medium text-center 
                                  absolute top-16 -left-full  ease-in-out duration-300 md:top-0 md:static
                                  bg-gradient-to-r from-blue-400 to-slate-100 dark:bg-gradient-to-l dark:from-slate-950 dark:to-blue-400  h-screen md:h-auto 
                                  md:bg-none dark:md:bg-none pt-48 md:pt-0">

            <div onClick={handleClick} className="w-screen py-3 md:px-3 md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="/">Home</Link>
            </div>

            <div onClick={handleClick} className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="/explore">Explore</Link>
            </div>

            <div onClick={handleClick} className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="/settings">Settings</Link>
            </div>

            <div className="flex flex-row m-2 text-xl font-semibold justify-center">
                <Link href="/login" className="bg-gray-300 px-5 md:py-2 py-3 mx-1 rounded-lg text-blue-500 w-1/2 md:w-auto">Login</Link>
                <Link href="/register" className="bg-blue-400 px-5 md:py-2 py-3 mx-1 rounded-lg text-gray-500 w-1/2 md:w-auto">Register</Link>
            </div>

      </div>
  )
}

export default Menu
