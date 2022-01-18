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
  const [notes, setNotes] = useState([
    {
      title: "Yoshi's birthday bash",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      id: 1,
    },
    {
      title: "Complete my ninja training",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      id: 2,
    },
    {
      title: "Order a pizza!",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      id: 3,
    },
    {
      title: "Buy Yoshi's Birthday Gift",
      content:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      id: 4,
    },
    {
      title: "Pay the milkman",
      content:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom. Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      id: 5,
    },
    {
      title: "Check my promo codes",
      content:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      id: 6,
    },
    {
      title: "Make a new website banner",
      content:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      id: 7,
    },
  ]);
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
