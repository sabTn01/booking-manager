import { createClient } from "@supabase/supabase-js";

const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};
export const supabaseUrl = "https://cgjtsntplbeohrrlpyza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnanRzbnRwbGJlb2hycmxweXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzcwMDgsImV4cCI6MjAxMzE1MzAwOH0.-T48iju4aGEP1dCT2KHv6KT98q1oAIiXASvq6jHTKrQ";
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default supabase;
