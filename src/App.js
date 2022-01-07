// import logo from "./logo.svg";
import "./App.css";
import FormNote from "./components/FormNote/FormNote";
import { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import NavNote from "./components/NavNote/NavNote";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "./myTheme";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
    console.log(newNote);
  };

  return (
    <ThemeProvider theme={myTheme}>
      {/* menu app bar */}
      <NavNote />
      <FormNote onAdd={addNote} />

      <NoteList noteArray={notes} />
    </ThemeProvider>
  );
}

export default App;
