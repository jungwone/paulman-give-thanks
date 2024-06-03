"use client";

import SubmitButton from "@/components/submit-button";
import GoogleIcon from "@/icons/google-lcon";
import KakaoIcon from "@/icons/kakao-icon";
import { signInWithGoogle, signInWithKakoTalk } from "./action";

export default function AuthUI() {
  return (
    <div>
      <form className="flex flex-col gap-6">
        <SubmitButton variant={"outline"} formAction={signInWithGoogle}>
          <span className="mr-3">
            <GoogleIcon />
          </span>
          구글로 시작하기
        </SubmitButton>

        <SubmitButton variant={"outline"} formAction={signInWithKakoTalk}>
          <span className="mr-3">
            <KakaoIcon />
          </span>
          카카오톡으로 시작하기
        </SubmitButton>
      </form>
    </div>
  );
}
