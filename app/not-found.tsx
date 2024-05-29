import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70dvh]">
      <div className="flex flex-col gap-4 justify-center items-center h-full text-xl">
        <p>이런! 잘못된 페이지에 오셨군요!</p>
        <p>
          하지만 괜찮습니다.{" "}
          <Link href={"/"} className="underline text-blue-600">
            여기
          </Link>
          를 클릭해주세요😉
        </p>
      </div>
    </div>
  );
}
