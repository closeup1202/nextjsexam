import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '18891bf0d0c9a0714d88',
      clientSecret: 'a37e1a1ae5a7ae98f2743f4357128798dada17cd',
    }),
    // CredentialProvider({

    // })
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 