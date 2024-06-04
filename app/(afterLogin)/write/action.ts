"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const scheme = z.object({
  title: z
    .string({ required_error: "제목을 입력해주세요." })
    .min(1, "제목을 2글자 이상 입력해주세요."),
  content: z
    .string({
      required_error: "내용을 입력해주세요.",
    })
    .min(5, "내용을 5글자 이상 입력해주세요."),
  is_anonymous: z.boolean(),
  is_hidden: z.boolean(),
});

export async function writeThanks(_: any, formData: FormData) {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
    is_anonymous: !!formData.get("is_anonymous"),
    is_hidden: !!formData.get("is_hidden"),
  };

  const result = scheme.safeParse(data);

  if (result.success) {
    const supabase = createClient();
    const { error } = await supabase.from("thanks").insert(result.data);

    if (!error) {
      redirect("/");
    }
  }

  if (result.error) {
    return result.error.flatten();
  }
}
