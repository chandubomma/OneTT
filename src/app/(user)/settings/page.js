'use client'
import { useSession,signOut } from 'next-auth/react';


import Link from 'next/link';

const Settings = () => {
  const session = useSession()
  return (
    <div>
      <div className='bg-gradient-to-b from-blue-300 to-gray-100 pb-8 pt-2 dark:bg-gradient-to-l dark:from-slate-900 dark:to-blue-900'>
        <h3 className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Account Details</h3>
        {
          session.data?
          <div className="flex flex-col w-screen justify-center items-center pt-4">
            {
              session.data.user.image?
              <img
                src={session.data.user.image}
                alt="user profile"
                className="w-40 h-40 rounded-full mb-4"
              />: <div className=" py-7 px-10 rounded-full bg-gradient-to-r from-blue-500 to-gray-400 text-gray-100  text-5xl text-center">{session.data.user.name[0]}</div>
            }
            <div className='flex flex-col center w-fit'>
            <div className='flex flex-col items-center justify-center'><h2 className='text-md text-blue-500 font-bold dark:text-gray-400'>Username- </h2><h2 className='text-lg text-gray-500 font-semibold dark:text-gray-100'> {session.data.user.name}</h2></div>
            <div className='flex  flex-col items-center justify-center mt-2'><h2 className='text-md text-blue-500 font-bold dark:text-gray-400'>Email-</h2><h2 className='text-lg text-gray-500 font-semibold dark:text-gray-100'> {session.data.user.email}</h2></div>
            </div>
          </div>:
          <div className="flex flex-col w-screen justify-center items-center">
            <img
                src='/onett_user_profile.jpeg'
                alt="user profile"
                className="w-40 h-40 rounded-full mb-4"
              />
            <div className='flex flex-col center w-fit'>
            <div className='flex flex-col items-center justify-center'><h2 className='text-md text-blue-500 font-bold dark:text-gray-400'>Username- </h2><h2 className='text-lg text-gray-500 font-semibold dark:text-gray-100'> your cool username</h2></div>
            <div className='flex  flex-col items-center justify-center mt-2'><h2 className='text-md text-blue-500 font-bold dark:text-gray-400'>Email-</h2><h2 className='text-lg text-gray-500 font-semibold dark:text-gray-100'> yourusername@gmail.com</h2></div>
            </div>
          </div>
        }
      </div>
      <div>
        <h3 className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Watch List</h3>
        <h4 className='text-md fond-semibold text-gray-400 ml-5'>Your Watch List is Empty!</h4>
        <h3 className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Favourites List</h3>
        <h4 className='text-md fond-semibold text-gray-400 ml-5'>Your Favourites List is Empty!</h4>
      </div>
      <hr className='my-5'/>
      <div>
        <h3 className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Help & Support</h3>
        <hr className='my-3'/>
        <h3 className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>About</h3>
        <hr className='my-3'/>
        {
          session.data?
          <Link href='/api/auth/signout' className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Sign Out</Link>:
          <Link href='/api/auth/signin' className='text-lg font-bold text-gray-500 m-4 dark:text-gray-100'>Sign In</Link>
        }
      </div>
    </div>
  )
}

export default Settings
