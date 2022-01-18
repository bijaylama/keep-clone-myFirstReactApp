import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputField from "../InputField/InputField";
import { Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function FormDialog({
  id,
  setOpenPop,
  openPop,
  handleButton,
  handleChange,
  title,
  content,
  setInput,
}) {
  return (
    <Dialog
      open={openPop}
      onBackdropClick={() => {
        setOpenPop(false);
        setInput({
          id: "",
          title: "",
          content: "",
        });
      }}
    >
      {/* CUSTOM INPUT FORM IMPORT */}
      <DialogTitle>
        <InputField
          // sx={formStyle.inputTitleStyle}
          name="title"
          defaultValue={title}
          // defaultValue="head"
          fontWeight="600"
          title="Title"
          onChange={(e) => handleChange(e.target)}
        />
      </DialogTitle>
      <DialogContent>
        <InputField
          // sx={formStyle.inputContentStyle}
          onChange={(e) => {
            handleChange(e.target);
          }}
          name="content"
          defaultValue={content}
          // defaultValue="body"
          fontWeight="400"
          multiline
          maxRows={6}
          title="Take a note..."
        />
      </DialogContent>
      <DialogActions>
        <Box
        // sx={formStyle.iconButtonStyle}
        >
          {/* FORM BUTTON */}

          <IconButton
            onClick={() => handleButton(id)}
            color="yellow"
            aria-label="send"
          >
            <SendIcon />
          </IconButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
