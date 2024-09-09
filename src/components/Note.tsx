import { NotesType } from "../notes"

interface NoteProps{
    notes: NotesType[]
}
export default function Note({notes}:NoteProps) {
    return(
        <>
            {notes.map(note => (
                <>
                    <div className="note">
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </div>
                </>
            ))}
        </>
    )
}