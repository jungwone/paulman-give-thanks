import { createClient } from "@/utils/supabase/server";
import ModeToggle from "./toggle-theme";
import Link from "next/link";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-center items-center py-4 border-b-[1px]">
      <Link href={"/"} className="mr-auto font-bold md:text-lg">
        폴맨's 감사노트
      </Link>
      <ModeToggle />
    </header>
  );
}
