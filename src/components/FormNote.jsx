import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  Container,
  Fab,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";

// sample
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

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
            <Paper elevation={5} sx={{ position: "relative" }}>
              <form noValidate autoComplete="off">
                {/* INPUT TITLE FORM */}
                <Box>
                  <StyledInputBase
                    placeholder="Title"
                    fullWidth
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  {/* INPUT CONTENT FORM */}
                  <StyledInputBase
                    placeholder="Take a note..."
                    fullWidth
                    multiline="true"
                    maxRows={6}
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                  />
                </Box>
              </form>
              {/* SAVE BUTTON */}
              <Box
                sx={{ position: "absolute", right: 0, bottom: 0, marginTop: 8 }}
              >
                <Fab color="primary" aria-label="add" onClick={handleButton}>
                  <AddIcon />
                </Fab>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
