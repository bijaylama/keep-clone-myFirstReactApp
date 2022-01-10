import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { myStyle } from "./myStyle";
import { useState } from "react";
import { Box } from "@mui/system";

export const CardNote = ({ note, handleDelete, handleEdit }) => {
  /// state for mouse event
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Card
      onMouseEn
      onPointerEnter={() => setMouseOver(true)}
      onPointerLeave={() => setMouseOver(false)}
      variant="outlined"
      sx={myStyle.cardStyle}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={myStyle.contentTitleStyle}>
          {note.title}
        </Typography>
        <Typography variant="body2" sx={myStyle.contentBodyStyle}>
          {note.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={5} sx={{ display: "flex" }}>
          {/* 
          
          card edit delete button 
          
          */}

          <Grid
            sx={{
              visibility: "hidden",
              ...(mouseOver === true ? myStyle.iconShow : myStyle.icon),
            }}
            item
            xs={6}
          >
            <IconButton onClick={handleEdit} color="green" aria-label="edit">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid
            sx={{
              visibility: "hidden",
              ...(mouseOver === true ? myStyle.iconShow : myStyle.icon),
            }}
            item
            xs={6}
          >
            <IconButton onClick={handleDelete} color="red" aria-label="delete">
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
