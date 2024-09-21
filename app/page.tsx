import { Suspense } from 'react'
import { NotesList } from './components/NotesList'
import { TimeCounter } from './components/TimeCounter'
import { Spinner } from './components/Spinner'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense fallback={<Spinner />}>
          <NotesList />
        </Suspense>
        <TimeCounter />
      </div>
    </main>
  )
}
