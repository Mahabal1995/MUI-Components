import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack>
      <Alert onClose={() => null} severity="success">
        This is a success alert—check it out!
      </Alert>
      <Alert onClose={() => null} severity="info">
        This is an info alert—check it out!
      </Alert>
      <Alert onClose={() => null} severity="warning">
        This is a warning alert—check it out!
      </Alert>
      <Alert onClose={() => null} severity="error">
        This is an error alert—check it out!
      </Alert>

      <Alert variant="outlined" onClose={() => null} severity="success">
        This is a success alert—check it out!
      </Alert>
      <Alert variant="outlined" onClose={() => null} severity="info">
        This is an info alert—check it out!
      </Alert>
      <Alert variant="outlined" onClose={() => null} severity="warning">
        This is a warning alert—check it out!
      </Alert>
      <Alert variant="outlined" onClose={() => null} severity="error">
        This is an error alert—check it out!
      </Alert>

      <Alert
        variant="filled"
        onClose={() => null}
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }>
        <AlertTitle>Success</AlertTitle>
        This is a success alert—check it out!
      </Alert>
      <Alert variant="filled" onClose={() => null} severity="info">
        This is an info alert—check it out!
      </Alert>
      <Alert variant="filled" onClose={() => null} severity="warning">
        This is a warning alert—check it out!
      </Alert>
      <Alert
        variant="filled"
        onClose={() => null}
        severity="error"
        icon={<CheckIcon />}>
        This is an error alert—check it out!
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
