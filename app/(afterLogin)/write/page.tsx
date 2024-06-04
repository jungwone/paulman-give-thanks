"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import { writeThanks } from "./action";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/submit-button";

export default function Page() {
  const [state, formAction] = useFormState(writeThanks, null);

  return (
    <div className="py-12 w-full flex flex-col items-center">
      <h1 className="mb-12">감사하자!</h1>
      <form
        action={formAction}
        className="max-w-screen-sm w-full flex flex-col gap-4"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">제목</Label>
          <Input id="title" name="title" type="text" />
          {state?.fieldErrors.title && (
            <span className="text-red-500 text-sm">
              {state.fieldErrors.title}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="content">내용</Label>
          <Textarea
            id="content"
            name="content"
            className="mb-1 min-h-36"
            placeholder="여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다"
          />
          {state?.fieldErrors.content && (
            <span className="text-red-500 text-sm">
              {state.fieldErrors.content}
            </span>
          )}
        </div>

        <div className="flex justify-end gap-4 mb-2">
          {/* 실명 공개 여부 */}
          <div className="flex justify-end items-center space-x-2">
            <Switch id="is_anonymous" name="is_anonymous" />
            <Label htmlFor="is_anonymous">익명</Label>
          </div>

          {/* 감사 공개 여부 */}
          <div className="flex justify-end items-center space-x-2">
            <Switch id="is_hidden" name="is_hidden" />
            <Label htmlFor="is_hidden">나만 보기</Label>
          </div>
        </div>

        <div className="flex justify-end">
          <SubmitButton>완료</SubmitButton>
        </div>
      </form>
    </div>
  );
}
