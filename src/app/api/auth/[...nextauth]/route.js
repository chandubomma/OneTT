import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";


export const AuthOptions = {
    providers : [
        Credentials({
            id : 'signin',
            name : "Credentials",
            credentials : {
                email : {
                    label : "Email :",
                    type : "text",
                    placeholder : "User Email"
                },
                password : {
                    label : "Password",
                    type : "password",
                    placeholder : "User Password"
                }
            },
            async authorize(credentials){
                return credentials;
            }
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    // pages : {
    //     signIn : '/signin',
    //     signUp : '/signup'
    // }
}



const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST }