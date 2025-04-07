import { auth } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(auth);
  if (!session || !session.user) {
    redirect("/auth");
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-4xl text-white font-medium">
        Hello, {session.user.name}
      </h1>
    </div>
  );
}
