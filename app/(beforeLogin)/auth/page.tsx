import { createClient } from "@/utils/supabase/server";
import AuthUI from "./auth-ui";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (user) {
    redirect("/");
  }

  return (
    <div className="py-20 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <h1 className="mb-9">로그인 / 회원가입</h1>
      <AuthUI />
    </div>
  );
}
