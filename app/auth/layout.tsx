import type { Database } from '@/database.types'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next//headers'
import type React from 'react'
import { SupabaseListener } from '../components/SupabaseListener'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}

export default AuthLayout
