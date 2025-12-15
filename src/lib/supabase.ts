import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from '../config/supabase.config'

const supabaseUrl = supabaseConfig.url
const supabaseAnonKey = supabaseConfig.anonKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: 'supabase-auth-token',
    flowType: 'pkce'
  }
})