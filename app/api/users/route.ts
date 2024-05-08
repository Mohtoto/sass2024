import { connectToDatabase } from "@/lib/database/ConnectToDB";
import { User } from "@/lib/database/models/user.model";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, username, firstName, lastName } = await request.json();

  try {
    await connectToDatabase();
    await User.create({ email, username, firstName, lastName });

   return NextResponse.json({ message : 'userCreated'} , { status: 201})
  } catch (error) {
    console.log(error);
  }
};
