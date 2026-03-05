import { supabase } from './lib/supabase'

// Test immédiat
supabase.from('visitor').select('*').limit(1).then(({ data, error }) => {
  if (error) console.log("Erreur de connexion :", error.message)
  else console.log("Données reçues de Supabase :", data)
})