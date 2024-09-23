import React, { Suspense } from 'react'
import { BlogListStatic } from '../components/BlogListStatic'
import { RefreshButton } from '../components/RefreshButton'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <BlogListStatic />
        <div className="flex justify-center">
          <RefreshButton />
        </div>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}

export default BlogLayout
