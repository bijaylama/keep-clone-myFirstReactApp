import * as React from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SearchBar from "../common/SearchBar/SearchBar";
import { navStyle } from "./style";

export default function ({ handleSearch }) {
  return (
    <Box sx={navStyle.container}>
      <AppBar color="yellow" position="static">
        <Toolbar>
          <EventNoteIcon sx={{ mr: 2 }} />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: 22,
              display: { xs: "none", sm: "block" },
            }}
          >
            Keep
          </Typography>
          <Box sx={{ flexGrow: 1, backgroundColor: "red" }} />
          {/* SEARCH COMPONENT */}
          <SearchBar
            onChange={(e) => handleSearch(e.target.value)}
            sx={{ flexGrow: 4 }}
          />
          <Box sx={{ flexGrow: 1.5 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
