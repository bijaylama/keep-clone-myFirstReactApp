import logo from "./logo.svg";
import "./App.css";
import FormNote from "./components/FormNote";
import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
    console.log(newNote);
  };

  return (
    <>
      <FormNote onAdd={addNote} />
      {/* iterate array of notes */}
      {notes.map((note, index) => {
        return (
          <NoteList
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </>
  );
}

export default App;
