import { Database } from '@/database.types'
import React from 'react'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

const fetchNotes = async (): Promise<Note[]> => {
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch notes')
  }
  const notes: Note[] = await res.json()
  return notes
}

export const NotesList = async () => {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id} className="p-2">
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
