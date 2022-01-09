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

export const CardNote = ({ note, handleDelete, handleEdit }) => {
  return (
    <Card variant="outlined" sx={myStyle.cardStyle}>
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
          <Grid item xs={6}>
            <IconButton onClick={handleEdit} color="yellow" aria-label="edit">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              onClick={handleDelete}
              color="yellow"
              aria-label="delete"
            >
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
