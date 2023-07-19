import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton
        loading
        loadingIndicator="Loading..."
        variant="contained"
        color="primary">
        Loading
      </LoadingButton>
      <LoadingButton
        loadingIndicator="Loading..."
        variant="outlined"
        color="primary">
        Loading
      </LoadingButton>
      <LoadingButton variant="text" color="primary">
        Loading
      </LoadingButton>

      <LoadingButton
        loadingPosition="start"
        variant="outlined"
        color="primary"
        startIcon={<SaveIcon />}>
        Save
      </LoadingButton>

      <LoadingButton
        loading
        loadingPosition="start"
        variant="outlined"
        color="primary"
        startIcon={<SaveIcon />}>
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
