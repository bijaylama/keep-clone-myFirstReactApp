import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { formStyle } from "./style";

import { Fab, Grid, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import InputField from "../common/InputField/InputField";
import SendIcon from "@mui/icons-material/Send";

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

export default function FormNote({
  expand,
  setExpand,
  input,
  setInput,
  onAdd,
  handleButton,
  handleExpand,
  handleChange,
}) {
  // const [expand, setExpand] = useState(false);
  // const [input, setInput] = useState({
  //   title: "",
  //   content: "",
  // });

  return (
    <>
      <Box sx={{ p: 10 }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Paper elevation={5} sx={formStyle.paperWrapeStyle}>
              {/* INPUT TITLE FORM */}
              <Box>
                {expand ? (
                  <InputField
                    sx={formStyle.inputTitleStyle}
                    name="title"
                    onChange={(e) => handleChange(e.target)}
                    fontWeight="600"
                    title="Title"
                  />
                ) : null}
                {/* INPUT CONTENT FIELD */}
                <InputField
                  sx={formStyle.inputContentStyle}
                  onChange={(e) => handleChange(e.target)}
                  name="content"
                  onClick={handleExpand}
                  fontWeight="400"
                  multiline
                  maxRows={6}
                  title="Take a note..."
                />
                <Box sx={formStyle.iconButtonStyle}>
                  {/* FORM BUTTON */}
                  {expand ? (
                    <IconButton
                      onClick={handleButton}
                      color="yellow"
                      aria-label="send"
                    >
                      <SendIcon />
                    </IconButton>
                  ) : null}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
