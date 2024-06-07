// import { Database } from "@/types/supabase";
import { sliceTextWithPeriods } from "@/utils/utils";

// type Props = {} & Database["public"]["Tables"]["thanks"]["Row"];

export default function JournalCard() {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg text-black w-96 h-52 shadow-xl">
      <section className="text-base font-bold mb-2 text-ellipsis overflow-hidden text-nowrap">
        {"감사 제목"}
      </section>

      <section className="break-words text-[#333333] h-32">
        {sliceTextWithPeriods(
          "한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나",
          120
        )}
      </section>

      <section className="text-xs flex justify-end">
        <div className="mr-4">by 작성자</div>
        <div className="text-zinc-500">몇 초전</div>
      </section>
    </div>
  );
}
