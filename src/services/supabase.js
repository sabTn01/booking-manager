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
const { VITE_SUPABASE_KEY } = import.meta.env;
const supabase = createClient(supabaseUrl, `${VITE_SUPABASE_KEY}`, options);

export default supabase;
