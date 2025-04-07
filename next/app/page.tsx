import Main from "@/components/Main";
import { auth } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(auth);
  if (!session || !session.user) {
    redirect("/auth");
  }
  return (
    <Main
      user={{
        email: session.user?.email || "",
        name: session.user?.name || "",
        image: session.user?.image || "",
      }}
    />
  );
}
