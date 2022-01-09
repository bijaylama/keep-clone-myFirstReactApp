import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import { CardNote } from "../common/CardNote/CardNote";

export default function NoteList({
  noteArray,
  handleDelete,
  editNote,
  setEditNote,
  setOpenPop,
  setInput,
}) {
  const handleEdit = (id) => {
    const findNote = noteArray.find((note) => note.id === id);
    setEditNote(findNote);
    setInput(findNote);
    setOpenPop(true);
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Masonry columns={4} spacing={2}>
          {noteArray.map((note, index) => (
            <CardNote
              key={index}
              note={note}
              handleDelete={() => handleDelete(note.id)}
              handleEdit={() => handleEdit(note.id)}
            />
          ))}
        </Masonry>
        {/* </Grid>
          <Grid item xs={1}></Grid> */}
      </Container>
    </Box>
  );
}
