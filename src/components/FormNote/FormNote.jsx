import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { formStyle } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { Fab, Grid, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import InputField from "../common/InputField/InputField";
import SendIcon from "@mui/icons-material/Send";
import Close from "@mui/icons-material/Close";

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
  input,
  setInput,
  onAdd,
  handleButton,
  handleExpand,
  handleChange,
  setExpand,

  value,
}) {
  return (
    <>
      <Box sx={{ p: 10 }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid onDoubleClick={() => setExpand(false)} item md={6}>
            <Paper elevation={5} sx={formStyle.paperWrapeStyle}>
              {/* 
              
              INPUT TITLE FORM 
              
              */}
              <Box>
                {expand ? (
                  <InputField
                    sx={formStyle.inputTitleStyle}
                    name="title"
                    onChange={(e) => handleChange(e.target)}
                    fontWeight="600"
                    title="Title"
                    placeholder="Title"
                    value={value.title}
                  />
                ) : null}
                {/* INPUT CONTENT FIELD */}
                <InputField
                  sx={formStyle.inputContentStyle}
                  onChange={(e) => handleChange(e.target)}
                  name="content"
                  placeholder="Take a note..."
                  onClick={handleExpand}
                  fontWeight="400"
                  multiline
                  maxRows={6}
                  title="Take a note..."
                  value={value.content}
                />
                <Box sx={formStyle.iconButtonStyle}>
                  {/* FORM BUTTON */}
                  {expand ? (
                    <>
                      <IconButton
                        onClick={handleButton}
                        color="yellow"
                        aria-label="send"
                      >
                        <SendIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setExpand(false);
                          setInput({
                            id: "",
                            title: "",
                            content: "",
                          });
                        }}
                        color="red"
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </>
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
