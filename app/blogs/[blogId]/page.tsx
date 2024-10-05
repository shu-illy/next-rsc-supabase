import { Database } from '@/database.types'
import { format } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

type Blog = Database['public']['Tables']['blogs']['Row']

type PageProps = {
  params: {
    blogId: string
  }
}

const fetchBlog = async (blogId: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/blogs?id=eq.${blogId}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
      }),
    }
  )
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data in server')
  // }
  const blogs: Blog[] = await res.json()
  return blogs[0]
}

const BlogPage = async ({ params }: PageProps) => {
  const blog = await fetchBlog(params.blogId)
  if (!blog) return notFound()
  return (
    <div className="mt-16 border-2 p-8 h-max">
      <p>
        <strong className="mr-3">Task ID:</strong> {blog.id}
      </p>
      <p>
        <strong className="mr-3">Title:</strong> {blog.title}
      </p>
      <p>
        <strong className="mr-3">Content:</strong> {blog.content}
      </p>
      <p>
        <strong className="mr-3">Created at:</strong>
        {blog && format(new Date(blog.created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>
      <Link href="/blogs">
        <ArrowUturnLeftIcon className="mt-3 h-6 w-6 cursor-pointer text-blue-500" />
      </Link>
    </div>
  )
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({ apikey: process.env.apikey as string }),
  })
  const blogs: Blog[] = await res.json()
  return blogs.map((blog) => ({ blogId: blog.id }))
}

export default BlogPage
