import Box from "@mui/material/Box";
import { formStyle } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import InputField from "../common/InputField/InputField";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FormNote({
  expand,
  setInput,
  handleButton,
  handleExpand,
  handleChange,
  setExpand,

  value,
}) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const widths = md ? 600 : 350;
  // const widths = 600;

  return (
    <>
      <Box
        onDoubleClick={() => {
          setExpand(false);
          setInput({
            id: "",
            title: "",
            content: "",
          });
        }}
        sx={formStyle.box}
      >
        <Box elevation={5} sx={formStyle.paper}>
          {/* 
              
              INPUT TITLE FORM 
              
              */}

          {expand ? (
            <InputField
              sx={{
                ...formStyle.input,
                ...formStyle.inputTitleStyle,
              }}
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
            sx={{
              ...formStyle.input,
              ...formStyle.inputContentStyle,
              width: widths,
            }}
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
                <Tooltip title="Save">
                  <IconButton
                    onClick={handleButton}
                    color="yellow"
                    aria-label="send"
                  >
                    <SendIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="close">
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
                </Tooltip>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
}
