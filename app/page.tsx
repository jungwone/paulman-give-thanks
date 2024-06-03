import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Index() {
  const client = createClient();
  const user = await client.auth.getUser();

  if (!user) {
    return redirect("/auth");
  }

  return (
    <div>
      {/* <div>paulman gamsa</div> */}
      <div>1</div>
      <Button variant={"default"}>버튼</Button>
    </div>
  );
}
