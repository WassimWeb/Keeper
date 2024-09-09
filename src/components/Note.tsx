import { NotesType } from "../notes"

interface NoteProps{
    notes: NotesType[]
}
export default function Note({notes}:NoteProps) {
    return(
        <>
            {notes.map(note => (
                <>
                    <div className="card">
                        <div className="card-header">
                        {note.title}
                        </div>
                        <div className="card-body">
                            <p>{note.content}</p>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}