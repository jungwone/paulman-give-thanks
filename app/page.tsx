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
      {/* <div>paulman gamsa</div> */}
      <div>
        하나님이 또 아름다운 하루를 선물해주셨습니다. 정말 잊을 수 없는
        날입니다. 저는 배가 고프지만 배가 고프지 않다고 할 수 있습니다.
        <br />
        <br />
        God has given us another beautiful day as a gift. It's an unforgettable
        day. I'm hungry, but I can say I'm not hungry. Do you understand what I
        mean?
      </div>
      <br />
      <br />
      <Button variant={"default"}>버튼</Button>
    </div>
  );
}
