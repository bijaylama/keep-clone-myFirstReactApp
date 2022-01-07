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
  styled,
  Typography,
} from "@mui/material";
import { myStyle } from "./style";

const cardButtomWrapper = styled("div")({});

export default function NoteList({ noteArray }) {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Masonry columns={4} spacing={2}>
            {noteArray.map((note, index) => (
              <Card key={index} variant="outlined" sx={myStyle.cardStyle}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={myStyle.contentTitleStyle}
                  >
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
                      <IconButton color="yellow" aria-label="add to favorites">
                        <EditIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                      <IconButton color="yellow" aria-label="share">
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
