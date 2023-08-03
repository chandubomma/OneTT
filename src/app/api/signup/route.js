import dbConnect from "@/lib/dbConnect"
import User from "@/models/User"
import { NextResponse } from 'next/server'


export const POST = async(req)=>{
    await dbConnect();
    let user = await req.json()
    user = new User(user);
    await user.save();
    return NextResponse.json(user);
}