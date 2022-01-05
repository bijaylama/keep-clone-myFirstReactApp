import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function FormNote({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleButton = (e) => {
    e.preventDefault();
    onAdd(note);
  };
  return (
    <>
      <Box sx={{ p: 10 }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Paper elevation={3}>
              <form noValidate autoComplete="off">
                <TextField
                  sx={{ m: 2 }}
                  name="title"
                  value={note.title}
                  label="Title"
                  variant="standard"
                  color="secondary"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  name="content"
                  value={note.content}
                  label="Take a note..."
                  variant="standard"
                  color="secondary"
                  fullWidth
                  onChange={handleChange}
                />
                <Button
                  onClick={handleButton}
                  variant="contained"
                  color="secondary"
                >
                  Save
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
