"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWithGoogle = async () => {
  const client = createClient();
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
    },
  });

  if (data.url) {
    redirect(data.url);
  }

  if (error) {
    redirect("/auth?message=could not authenticate user");
  }
};

export const signInWithKakoTalk = async () => {
  const client = createClient();
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
    },
  });

  if (data.url) {
    redirect(data.url);
  }

  if (error) {
    redirect("/auth?message=could not authenticate user");
  }
};

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`/login?message=${error.message}`);
  }

  return redirect("/");
}

export async function signUpWithEmail(formData: FormData) {
  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error.message);
    return redirect(`/login?message=${error.message}`);
  }

  return redirect("/login?message=email");
}
