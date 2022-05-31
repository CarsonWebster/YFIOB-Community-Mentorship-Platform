import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseAnonKey = process.env.SUPABASE_KEY
const supabaseUrl = "https://ttzewlgqdgjdgvmsnywg.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0emV3bGdxZGdqZGd2bXNueXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5MDczNzcsImV4cCI6MTk2ODQ4MzM3N30.U0O3MwL51GVTMxzh3GeJ00bkvrUAa8veSYCqC5BQzXM"

const supabase = createClient(supabaseUrl, supabaseAnonKey)


export default function useSupabase () {
  return { supabase }
}