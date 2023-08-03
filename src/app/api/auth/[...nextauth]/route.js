import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect"
import User from "@/models/User"


export const AuthOptions = {
    providers : [
        CredentialsProvider({
           
            name : "credentials",
            credentials : {
                email : {
                    label : "Email :",
                    type : "email",
                    placeholder : "User Email"
                },
                password : {
                    label : "Password",
                    type : "password",
                    placeholder : "User Password"
                }
            },
            async authorize(credentials){
                await dbConnect()
                const user = await User.findOne({email: credentials.email});
                if(user && user.password==credentials.password)return user
                return null;
            }
        }),
        GoogleProvider({
            id:'google',
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    pages : {
        signIn : '/signin',
        
    }
}



const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST }