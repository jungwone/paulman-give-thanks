import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
// import { createClient } from "@/utils/supabase/server";

export default function Page() {
  // const write = async () => {
  //   "use server";
  //   const supabase = createClient();
  //   try {
  //     await supabase.from("thanks").insert({});
  //   } catch (error) {
  //     // TODO: 에러가 발생했습니다. 잠시 후 다시 시도해주세요. 지속적으로 문제가 발생하면 관리자에게 문의해주세요.
  //     console.log(error);
  //   }
  // };

  return (
    <div className="py-12 w-full flex flex-col items-center">
      <h1 className="mb-12">감사하자!</h1>
      <form
        // action={write}
        className="max-w-screen-sm w-full flex flex-col gap-4"
      >
        <Textarea
          className="mb-1 min-h-36"
          placeholder="여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다"
        />

        {/* 감사 공개 여부 */}
        <div className="flex justify-end gap-4 mb-2">
          <div className="flex justify-end items-center space-x-2">
            <Switch id="name" />
            <Label htmlFor="name">익명</Label>
          </div>

          <div className="flex justify-end items-center space-x-2">
            <Switch id="hidden" />
            <Label htmlFor="hidden">나만 보기</Label>
          </div>
        </div>

        {/* 실명 공개 여부 */}

        <div className="flex justify-end">
          <Button>완료</Button>
        </div>
      </form>
    </div>
  );
}
