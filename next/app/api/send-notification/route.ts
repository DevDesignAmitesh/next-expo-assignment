import { prisma } from "@/prisma/src";
import { adminMessaging } from "@/utils/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, title, body } = await req.json();

  if (!email || !title || !body) {
    return NextResponse.json({ message: "No inputs" }, { status: 404 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user?.token)
    return NextResponse.json({ message: "No token" }, { status: 404 });

  const message = {
    notification: {
      title,
      body,
    },
    token: user.token,
  };

  await adminMessaging.send(message);

  return NextResponse.json({ message: "Notification sent" });
}
