// import logo from "./logo.svg";
import "./App.css";
import FormNote from "./components/FormNote/FormNote";
import { Edit } from "./components/Edit/Edit";

import { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import NavNote from "./components/NavNote/NavNote";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "./myTheme";
import { nanoid } from "nanoid";
import ModalEdit from "./components/common/ModalEdit/ModalEdit";

function App() {
  //
  //
  //
  //NOTE LIST ARRAY LIST
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "this is title 1",
      content: "This is my first note!",
    },
    {
      id: nanoid(),
      title: "this is title 2",
      content: "This is my second note!",
    },
    {
      id: nanoid(),
      title: "this is title 3",
      content: "This is my third note!",
    },
    {
      id: nanoid(),
      title: "this is title 4",
      content: "This is my new note!",
    },
  ]);
  //EDIT STATE
  const [editNote, setEditNote] = useState({
    title: "",
    content: "",
  });
  //POP UP STATE
  const [openPop, setOpenPop] = useState(false);
  //INPUT STATE
  const [input, setInput] = useState({
    id: "",
    title: "",
    content: "",
  });
  // FORM EXPAND STATE
  const [expand, setExpand] = useState(false);

  //
  //
  //
  //
  //
  //
  //HANDLE EXPAND FORM
  const handleExpand = () => {
    setExpand(true);
  };

  //UNCHANGE EVENT FORM
  const handleChange = ({ name, value }) => {
    console.log(value);

    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  //ADD TO NOTES collection
  const addNote = (newNote) => {
    const note = (preValue) => {
      return [
        ...preValue,
        { id: nanoid(), title: newNote.title, content: newNote.content },
      ];
    };
    setNotes(note);
    // setInput({ id: "", title: "", content: "" });
  };
  //SUBMIT BUTTON EVENT
  const handleButton = (id) => {
    if (input.title === "" && input.content === "") {
      setOpenPop(false);
    } else if (openPop) {
      setNotes(
        notes.map((val) => {
          if (val.id === id) {
            return { ...val, title: input.title, content: input.content };
          }
          return val;
        })
      );
      setOpenPop(false);
    } else if (input.title !== "" || input.content !== "") {
      addNote(input);
      setExpand(false);
      setInput({
        id: "",
        title: "",
        content: "",
      });
    } else {
    }
    setExpand(false);
  };
  // handle delete
  const handleDelete = (id) => {
    const newNote = notes.filter((val) => val.id !== id);
    setNotes(newNote);
  };

  return (
    <ThemeProvider theme={myTheme}>
      {/* menu app bar */}
      <NavNote />
      <FormNote
        handleChange={handleChange}
        handleExpand={handleExpand}
        expand={expand}
        setExpand={setExpand}
        input={input}
        setInput={setInput}
        // onAdd={addNote}
        handleButton={handleButton}
      />

      <NoteList
        noteArray={notes}
        // handleEdit={handleEdit}
        handleDelete={handleDelete}
        editNote={editNote}
        setEditNote={setEditNote}
        setOpenPop={setOpenPop}
        setInput={setInput}
      />

      {openPop && (
        <Edit
          input={input}
          setInput={setInput}
          //  updateVal={updateVal}
          openPop={openPop}
          setOpenPop={setOpenPop}
          editNote={editNote}
          handleChange={handleChange}
          handleButton={handleButton}
        />
      )}

      <ModalEdit />
    </ThemeProvider>
  );
}

export default App;
