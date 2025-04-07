import { prisma } from "@/prisma/src";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, token } = body;

    if (!email || !token) {
      return NextResponse.json(
        { message: "Email and token are required" },
        { status: 400 }
      );
    }

    // Update user's token
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { token },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error: any) {
    console.error("Error saving token:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
