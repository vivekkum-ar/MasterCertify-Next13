import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { Name, Email, Password, Role="USER" } = await req.json();
    const hashedPassword = await bcrypt.hash(Password, 10);
    await connectMongoDB();
    await User.create({ Name, Email, Password: hashedPassword, Role });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}