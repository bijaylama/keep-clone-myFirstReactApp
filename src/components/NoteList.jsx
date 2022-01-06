import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

export default function NoteList({ noteArray }) {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          {/* <Grid item xs={1}></Grid>
          <Grid item xs={10}> */}
          <Masonry columns={4} spacing={2}>
            {noteArray.map((note, index) => (
              <Card
                variant="outlined"
                sx={{ "&:hover": { boxShadow: "0px 0px 8px #e0e0e0" } }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {note.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      letterSpacing: ".00625em",
                      fontSize: "1.125rem",
                      lineHeight: "1.5rem",
                      fontFamily: "'Open Sans', sans-serif",
                      marginTop: 2,
                      fontWeight: 200,
                      lineHeight: 1.5,
                    }}
                  >
                    {note.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid item xs={3.5}></Grid>
                  <Grid item xs={3.5}></Grid>
                  <Grid item xs={5} sx={{ display: "flex" }}>
                    <Grid item xs={6}>
                      <IconButton aria-label="add to favorites">
                        <EditIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                      <IconButton aria-label="share">
                        <DeleteForeverIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            ))}
          </Masonry>
          {/* </Grid>
          <Grid item xs={1}></Grid> */}
        </Container>
      </Box>
    </>
  );
}
