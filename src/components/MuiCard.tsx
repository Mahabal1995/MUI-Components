import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React is
            used to build single-page applications. React allows us to create
            reusable UI
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
