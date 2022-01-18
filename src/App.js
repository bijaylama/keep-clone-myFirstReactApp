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
import { Search } from "./components/Search";

const defaultInputValues = {
  id: "",
  title: "",
  content: "",
};
function App() {
  //
  //
  // 1 NOTE LIST ARRAY LIST
  const [notes, setNotes] = useState([]);
  // 2 EDIT STATE
  const [editNote, setEditNote] = useState({
    title: "",
    content: "",
  });
  // 3 POP UP STATE
  const [openPop, setOpenPop] = useState(false);
  // 4 INPUT STATE
  const [input, setInput] = useState(defaultInputValues);
  // 5 FORM EXPAND STATE
  const [expand, setExpand] = useState(false);
  //6 search input data
  const [search, setSearch] = useState(notes);
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
        { id: nanoid(), title: newNote.title, content: newNote.content },
        ...preValue,
      ];
    };
    setNotes(note);
    setSearch(note);
  };
  //SUBMIT BUTTON EVENT
  const handleButton = (id) => {
    //EMPTY AND SPACE CONDITION
    if (input.title.trim() === "" && input.content.trim() === "") {
      setInput({ id: "", title: "", content: "" });
      setOpenPop(false);
    } else if (openPop) {
      const updateData = notes.map((val) => {
        if (val.id === id) {
          return { ...val, title: input.title, content: input.content };
        }
        return val;
      });
      setNotes(updateData);
      setSearch(updateData);
      setInput({
        id: "",
        title: "",
        content: "",
      });
      setOpenPop(false);
      // ADDING DATA FROM FORM
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

  // handle search
  const handleSearch = (val) => {
    filterData(val);
  };
  const filterData = (val) => {
    const lowercasedValue = val.toLowerCase().trim();
    if (lowercasedValue === "") setNotes(search);
    else {
      const filteredData = search.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setNotes(filteredData);
    }
  };
  return (
    <ThemeProvider theme={myTheme}>
      {/* menu app bar */}
      <NavNote handleSearch={handleSearch} />
      <FormNote
        handleChange={handleChange}
        handleExpand={handleExpand}
        expand={expand}
        setExpand={setExpand}
        setInput={setInput}
        handleButton={handleButton}
        value={input}
      />

      <NoteList
        noteArray={notes}
        // handleEdit={handleEdit}
        handleDelete={handleDelete}
        editNote={editNote}
        setEditNote={setEditNote}
        setOpenPop={setOpenPop}
        setInput={setInput}
        search={search}
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
          setInput={setInput}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
