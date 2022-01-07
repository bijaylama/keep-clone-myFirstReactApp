import logo from "./logo.svg";
import "./App.css";
import FormNote from "./components/FormNote/FormNote";
import { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import NavNote from "./components/NavNote/NavNote";

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
      {/* menu app bar */}
      <NavNote />
      <FormNote onAdd={addNote} />

      <NoteList noteArray={notes} />
    </>
  );
}

export default App;
