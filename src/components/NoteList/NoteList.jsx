import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import { CardNote } from "../common/CardNote/CardNote";
import { Typography } from "@mui/material";
import { style } from "./style";

export default function NoteList({
  noteArray,
  handleDelete,
  editNote,
  setEditNote,
  setOpenPop,
  setInput,
  search,
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
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
          {noteArray.length ? (
            noteArray.map((note, index) => (
              <div key={index}>
                <CardNote
                  key={index}
                  note={note}
                  handleDelete={() => handleDelete(note.id)}
                  handleEdit={() => handleEdit(note.id)}
                />
              </div>
            ))
          ) : (
            <Typography sx={style.footer}>No data found...</Typography>
          )}
        </Masonry>
        {/* </Grid>
          <Grid item xs={1}></Grid> */}
      </Container>
    </Box>
  );
}
