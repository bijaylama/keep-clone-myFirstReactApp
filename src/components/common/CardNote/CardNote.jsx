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

export const CardNote = ({ id, title, content, handleDelete }) => {
  return (
    <Card variant="outlined" sx={myStyle.cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div" sx={myStyle.contentTitleStyle}>
          {id}
          {title}
        </Typography>
        <Typography variant="body2" sx={myStyle.contentBodyStyle}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={5} sx={{ display: "flex" }}>
          <Grid item xs={6}>
            <IconButton color="yellow" aria-label="add to favorites">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              onClick={() => handleDelete(id)}
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
