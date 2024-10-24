'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export const RefreshButton = () => {
  const router = useRouter()
  return (
    <button
      type="button"
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        router.refresh()
      }}
    >
      Refresh current route
    </button>
  )
}
