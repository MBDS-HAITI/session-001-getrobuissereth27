

export default function NoteCard({ note }) {
    if (!note) {
        return <p>Aucun élément à afficher.</p>;
    }

    return (
        <div>
            <h3>{note.course}</h3>
            <p>Note obtenue : <strong>{note.grade}</strong></p>
            <span >Date : {note.date}</span>
            <p >
                Étudiant : {note.student.firstname} {note.student.lastname}
            </p>
        </div>
    );
}