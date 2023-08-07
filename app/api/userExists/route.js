import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { Email } = await req.json();
    const user = await User.findOne({ Email }).select("_id");

    console.log("user-did-not-exist-before-if-null: ", user);
    /* --------------------------------- Outputs -------------------------------- */
    // user: null ------ it's null as the user should'nt exist before signup or it should'nt be duplicate

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}