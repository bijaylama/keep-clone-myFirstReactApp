import { Box } from "@mui/material";

export default function NoteList({ id, title, content }) {
  return (
    <>
      <Box>
        <h1>{title}</h1>
        <p>{content} </p>
      </Box>
    </>
  );
}
