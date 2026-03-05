import { createClient } from '@supabase/supabase-js'

// Ces variables viennent de ton fichier .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key in .env file")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)