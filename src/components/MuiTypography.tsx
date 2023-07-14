import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      {/* component specify the customed tyoe of the tag -> here h4 is represented as h1 tag, gutterbottom is to provide margin-bottom */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">SUbtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
        architecto repellendus voluptatem sint quisquam ut voluptatum aut nobis
        eaque.
      </Typography>
    </div>
  );
};

export default MuiTypography;
