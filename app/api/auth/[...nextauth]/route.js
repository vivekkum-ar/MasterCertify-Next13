import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

    
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                // const user = {id:"1"};
                const {Email,Password} = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({Email});

                    if(!user) {
                        return null;
                    }

                    const passwordsMatch =  await bcrypt.compare(Password, user.Password);
                    if(!passwordsMatch){
                        return null;
                    }
                    console.log("route",user)
                    /* ---------------------------------- Logs ---------------------------------- */
                    /* ------------------------ Role based authentication ----------------------- */
                    // {
                        // Role: 'USER',
                        // _id: new ObjectId("64f087064e5608bc7a979175"),
                        // Name: 'Vivek Kumar',
                        // Email: 'prasadvivek1999@gmail.com',
                        // Password: '$2a$10$futKUbzvCJh1Uy4XpA2X.eSlrE0msJ7ZQMysztnHNGIdpnLyJJ2WW',
                        // createdAt: 2023-08-31T12:26:46.254Z,
                        // updatedAt: 2023-08-31T12:26:46.254Z,
                        // __v: 0
                    // }

                    console.log("returned:" ,{ name: user.Name, email: user.Email, role: user.Role });

                    /* --------------------------------- Outputs --------------------------------- */
                    // returned: {
                    //     name: 'Vivek Kumar',
                    //     email: 'prasadvivek1999@gmail.com',
                    //     role: 'USER'
                    //   }
                    return { name: user.Name, email: user.Email, role: user.Role };
                } catch (error) {
                     console.log("Error: ", "Route NEXT error", error);
                }
                return user;
            }, 
        }),
    ],
    callbacks:{
        async jwt({token, user, session}){
            console.log("jwt callback:" , {token,user,session});
            if(user){
                return {
                    ...token,
                    role: user.Role,
                };
            }
            return token;
        },
        async session({session,token,user}){
            console.log("session callback:" , {session,token,user});       
            return session;
        }
    },
    session:{
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};