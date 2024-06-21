import { JournalType } from "@/types/journal";
import { formatDate, sliceTextWithPeriods } from "@/utils/utils";

export default function JournalCard({
  title,
  content,
  profiles,
  created_at,
}: JournalType) {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg text-black w-96 h-52 shadow-xl">
      <section className="text-base font-bold mb-2 text-ellipsis overflow-hidden text-nowrap">
        {title}
      </section>

      <section className="break-words text-[#333333] h-32">
        {sliceTextWithPeriods(content, 120)}
      </section>

      <section className="text-xs flex justify-end">
        <div className="mr-4">by {profiles?.username || "작성자"}</div>
        <div className="text-zinc-500">{formatDate(created_at)}</div>
      </section>
    </div>
  );
}
