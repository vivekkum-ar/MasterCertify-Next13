import { NextResponse } from 'next/server';

export async function POST(req){
    try {
        const { Name, Email, Password } = await req.json();
        console.log(Name,Email,Password);
        return NextResponse.json({ message: "User successfully registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error while registering" }, { status: 500 });
    }
};
