import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
            }, 

            async authorize(credentials) { 
                
                const email = credentials?.username; 
                const password = credentials?.password; 

                // const user = await prisma.user.findone({
                //     email,
                //     password
                // })

                
                const user = 1

                if(!user) {
                    return null;
                }

                return {
                    // commented to remove errors
                    // id: user.id,
                    // email : user.email,
                    id : "12413123",
                    name : "om123",
                    email: "om@om.com"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
    pages: {
        signIn: "/auth", // route is `/app/auth/page.tsx`
    },
    secret : process.env.NEXTAUTH_URL,
    callbacks : {
        jwt : ({ token, user } : any) => {
            // console.log(token);
            token.userId = token.sub;
            return token;
            
        },
        session : ({session, token, user } :any) => {
            if(session && session.user) {
                session.user.id = token.sub // or can be token.userId due to jwt callback
            }
            console.log(session);
            return session
            
        }
    },
    
        
}