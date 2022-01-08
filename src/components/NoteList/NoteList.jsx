import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import { CardNote } from "../common/CardNote/CardNote";

export default function NoteList({ noteArray, handleDelete }) {
  return (
    <Box>
      <Container maxWidth="lg">
        <Masonry columns={4} spacing={2}>
          {noteArray.map((note, index) => (
            <CardNote
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              handleDelete={handleDelete}
            />
          ))}
        </Masonry>
        {/* </Grid>
          <Grid item xs={1}></Grid> */}
      </Container>
    </Box>
  );
}
