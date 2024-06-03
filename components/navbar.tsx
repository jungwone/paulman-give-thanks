import { createClient } from "@/utils/supabase/server";
import ModeToggle from "./toggle-theme";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Pencil } from "lucide-react";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-center items-center py-4 border-b-[1px] ">
      <Link href={"/"} className="mr-auto font-bold md:text-lg">
        폴맨's 감사노트
      </Link>
      <div className="gap-2 flex items-center">
        {user ? (
          <Link href={"/write"}>
            <Button variant={"outline"} size={"icon"}>
              <Pencil className="size-[1.2rem]" />
            </Button>
          </Link>
        ) : (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"/auth"}
          >
            로그인
          </Link>
        )}

        <ModeToggle />
      </div>
    </header>
  );
}
