'use client'
import {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { signIn } from 'next-auth/react';
import { useRouter,useSearchParams } from 'next/navigation';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';


export default function SignUp(){
    const [user,setUser] = useState({});
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    function handleInputChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    async function handleGoogleSignIn(){
        const res = await signIn('google',{callbackUrl});
        if(res.ok)router.push(callbackUrl);
    }
   

    async function handleSignUp(e){
        e.preventDefault();
        const res = await fetch('/api/signup',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(user)
        });
       
        if(res.ok){
           const res2 = await signIn('credentials',{redirect:{destination:callbackUrl},email:user.email,password:user.password,callbackUrl});
           if(res2.ok)router.push(callbackUrl);
        }
    }

    return(
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
           
                <div className="w-fit h-fit ">
                <h1 className="text-gray-400 text-5xl  mb-6 md:text-5xl font-extrabold "><span className="text-blue-500 dark:text-white">O</span>ne<span className='text-blue-500 dark:text-white'>TT</span></h1>
                    <h3 className="mb-4 text-xl text-blue-500 font-medium"><strong>Sign Up</strong></h3>
                    <form method='POST' onSubmit={(e)=>handleSignUp(e)}>
                        <div className=" mb-3 mt-4 relative">
                            <PersonIcon className='absolute top-3 left-2 text-blue-500'/>
                            <input type="text" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="name" placeholder="Username" name="name" onChange={(e)=>handleInputChange(e)} required/>
                        </div>
                        <div className=" mb-3 mt-3 relative">
                            <EmailIcon className='absolute top-3 left-2 text-blue-500'/>
                            <input type="email" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="email" placeholder="Email" name="email" onChange={(e)=>handleInputChange(e)} required/>
                        </div>
                        <div className=" mb-3 mt-3 relative">
                            <LockIcon className='absolute top-3 left-2 text-blue-500'/>
                            <input type="password" className="w-80 p-3 pl-10 border-2 border-blue-500 focus:outline-blue-500 text-gray-500 rounded-md" id="password" placeholder="Password" name="password" onChange={(e)=>handleInputChange(e)} required/>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="px-3 py-2 bg-blue-500 rounded-lg text-gray-100 font-medium">Sign Up</button>
                        </div>
                    </form>
                    <div className='mt-10'>
                        <button onClick={()=>handleGoogleSignIn()} className='w-80 border-2 border-blue-500 px-3 py-2 rounded-md relative text-gray-500 font-semibold'><GoogleIcon className='text-blue-500 absolute left-3'/>Sign in with Google</button>
                    </div>
                    <div className='mt-10 w-full'>
                        <Link href='/api/auth/signin' className='text-gray-400 text-md font-medium w-fit m-auto block hover:text-gray-300'>Already have an account? sign in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}