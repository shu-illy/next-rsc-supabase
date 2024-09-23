import React from 'react'

const ThirdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout 3</p>
      {children}
    </main>
  )
}

export default ThirdLayout
