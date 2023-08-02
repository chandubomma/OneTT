'use client'
import {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function page(){
    const [user,setUser] = useState({});

    function handleInputChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    return(
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
           
                <div className="w-fit h-fit ">
                <h1 className="text-gray-400 text-5xl  mb-6 md:text-5xl font-extrabold "><span className="text-blue-500 dark:text-white">O</span>ne<span className='text-blue-500 dark:text-white'>TT</span></h1>
                    <h3 className="mb-4 text-xl text-blue-500 font-medium"><strong>Sign Up</strong></h3>
                    <form method='post' action='/api/signup'>
                        <div className=" mb-3 mt-4 relative">
                            <PersonIcon className='absolute top-3 left-2 text-gray-500'/>
                            <input type="text" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="name" placeholder="Username" name="name" onChange={(e)=>handleInputChange(e)}/>
                        </div>
                        <div className=" mb-3 mt-3 relative">
                            <EmailIcon className='absolute top-3 left-2 text-gray-500'/>
                            <input type="email" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="email" placeholder="Email" name="email" onChange={(e)=>handleInputChange(e)}/>
                        </div>
                        <div className=" mb-3 mt-3 relative">
                            <LockIcon className='absolute top-3 left-2 text-gray-500'/>
                            <input type="password" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="password" placeholder="Password" name="password" onChange={(e)=>handleInputChange(e)}/>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="px-3 py-2 bg-blue-500 rounded-lg text-gray-100 font-medium">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}