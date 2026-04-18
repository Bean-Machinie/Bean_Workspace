import { supabase } from '@/config/supabase'

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession()
  return { session: data.session, error }
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { user: data.user, session: data.session, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}
