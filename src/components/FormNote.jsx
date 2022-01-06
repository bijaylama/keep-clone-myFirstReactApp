import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

import { Fab, Grid, InputBase, Paper } from "@mui/material";
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
  const [expand, setExpand] = useState(false);
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
    setNote({
      title: "",
      content: "",
    });
    setExpand(false);
  };
  const onExpand = () => {
    setExpand(true);
  };
  return (
    <>
      <Box sx={{ p: 10 }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Paper elevation={5} sx={{ position: "relative" }}>
              {/* INPUT TITLE FORM */}
              <Box>
                {expand ? (
                  <StyledInputBase
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "1.225rem",
                    }}
                    placeholder="Title"
                    fullWidth
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                  />
                ) : null}
              </Box>
              {/* INPUT CONTENT FORM */}
              <Box>
                <StyledInputBase
                  placeholder="Take a note..."
                  fullWidth
                  multiline="true"
                  maxRows={6}
                  name="content"
                  value={note.content}
                  onChange={handleChange}
                  onClick={onExpand}
                />
              </Box>
              {/* BUTTON FIELD */}
              <Box
                sx={{ position: "absolute", right: 0, bottom: 0, marginTop: 8 }}
              >
                {expand ? (
                  <Fab
                    color="extended"
                    size="medium"
                    aria-label="add"
                    onClick={handleButton}
                  >
                    <AddIcon />
                  </Fab>
                ) : null}
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
