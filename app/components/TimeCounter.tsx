'use client'
import React, { useEffect, useState } from 'react'

export const TimeCounter = () => {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 100)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <p>{count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
