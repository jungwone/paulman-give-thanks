export type JournalType = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    username: string | null;
  } | null;
};
