import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      Role: string;
    } & DefaultSession["user"];
  }
}
