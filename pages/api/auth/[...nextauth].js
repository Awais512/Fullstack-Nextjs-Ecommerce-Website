import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  JWT_SECRET,
  TWITTER_ID,
  TWITTER_SECRET,
  FACEBOOK_ID,
  FACEBOOK_SECRET,
} from "../../../constants";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    TwitterProvider({
      clientId: TWITTER_ID,
      clientSecret: TWITTER_SECRET,
    }),
    FacebookProvider({
      clientId: FACEBOOK_ID,
      clientSecret: FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  pages: {
    //signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: JWT_SECRET,
});
