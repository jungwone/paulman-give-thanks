import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  console.log(isSupabaseConnected);

  return (
    <div>
      <div>paulman gamsa</div>
      <Button variant={"default"}>버튼</Button>
    </div>
  );
}
