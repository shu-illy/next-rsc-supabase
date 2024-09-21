import { NotesList } from './components/NotesList'
import { TimeCounter } from './components/TimeCounter'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <NotesList />
        <TimeCounter />
      </div>
    </main>
  )
}
