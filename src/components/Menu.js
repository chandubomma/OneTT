'use client'
import React from 'react'
import Link from 'next/link'
import { signOut,useSession } from 'next-auth/react'

const Menu = ({menuRef,setMenuOpen}) => {
    const session = useSession();
    const handleClick = ()=>{
        menuRef.current.classList.add("-left-full")
        menuRef.current.classList.remove("left-0")
        setMenuOpen(false);
    }
  return (
    <div ref={menuRef} className="flex flex-col md:flex-row text-2xl text-blue-500 dark:text-white font-medium text-center 
                                  absolute top-16 -left-full  ease-in-out duration-300 md:top-0 md:static
                                  bg-gradient-to-r from-blue-400 to-slate-100 dark:bg-gradient-to-l dark:from-slate-950 dark:to-blue-400  h-screen md:h-auto 
                                  md:bg-none dark:md:bg-none pt-48 md:pt-0 ">

            <div onClick={handleClick} className="w-screen py-3 md:px-3 md:w-auto hover:bg-blue-500 dark:hover:bg-blue-800 hover:text-white">
                <Link href="/">Home</Link>
            </div>

            <div onClick={handleClick} className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 dark:hover:bg-blue-800 hover:text-white">
                <Link href="/explore">Explore</Link>
            </div>

            <div onClick={handleClick} className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 dark:hover:bg-blue-800  hover:text-white">
                <Link href="/settings">Settings</Link>
            </div>

            {
                session.data?
                <div className="flex flex-row m-2 text-lg font-semibold justify-center">
                <button onClick={()=>signOut()} className="dark:bg-white bg-gray-300 px-5 md:py-2 py-3 mx-1 rounded-lg text-blue-500 w-1/2 md:w-auto">Sign Out</button>
                </div>:
                <div className="flex flex-row m-2 text-lg font-semibold justify-center">
                <Link href="/api/auth/signin" className="bg-blue-400 px-5 md:py-2 py-3 mx-1 rounded-lg text-white w-1/2 md:w-auto">Sign In</Link>
                <Link href="/signup" className="dark:bg-white bg-gray-300 px-5 md:py-2 py-3 mx-1 rounded-lg text-blue-500 w-1/2 md:w-auto">Sign Up</Link>
                
                </div>
            }

      </div>
  )
}

export default Menu
