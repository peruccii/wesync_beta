import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { GithubProfile } from "next-auth/providers/github";

const authOptions: NextAuthOptions  = {
 providers: [
   GithubProvider({
     profile(profile: GithubProfile) {
      console.log(profile)
      return {...profile, role: profile.role ?? 'user', id: profile.id.toString()}
     },
     clientId: process.env.GITHUB_CLIENT_ID!,
     clientSecret: process.env.GITHUB_CLIENT_SECRET!
   }),
 ],
 callbacks: {
  // async jwt({ token, user }) {
  //  if (user) token.role = user.role
  //  return token
  // },
  // async session({ session, token }) {
  //  if (session?.user) session.user.role = token.role
  //  return session
  // }
 }
}

export default authOptions