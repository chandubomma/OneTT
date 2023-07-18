import React from 'react'
import Link from 'next/link'

const Menu = ({menuRef}) => {
  return (
    <div ref={menuRef} className="flex flex-col md:flex-row text-2xl text-blue-500 font-medium text-center 
                                  absolute top-24 -left-full  ease-in-out duration-300 md:top-0 md:static">

            <div className="w-screen py-3 md:px-3 md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="#">Home</Link>
            </div>

            <div className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="#">Explore</Link>
            </div>

            <div className="w-screen py-3 md:px-3  md:w-auto hover:bg-blue-500 hover:text-white">
                <Link href="#">Settings</Link>
            </div>

            <div className="flex flex-row m-2 text-xl font-semibold justify-center">
                <Link href="#" className="bg-gray-300 px-5 md:py-2 py-3 mx-1 rounded-lg text-blue-500 w-1/2 md:w-auto">Login</Link>
                <Link href="#" className="bg-blue-400 px-5 md:py-2 py-3 mx-1 rounded-lg text-gray-500 w-1/2 md:w-auto">Register</Link>
            </div>

      </div>
  )
}

export default Menu
