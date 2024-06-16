import { Database } from "./supabase";

export type Journal = Database["public"]["Tables"]["thanks"]["Row"];
