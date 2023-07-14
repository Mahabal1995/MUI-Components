import { useState } from "react";

import { Stack, TextField, InputAdornment } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ScaleIcon from "@mui/icons-material/Scale";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Don't share this info"}
        />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Form Input"
          required
          helperText="Please fill out this field"
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="This is your password"
        />
        <TextField label="Password" disabled helperText="This is disabled" />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyRupeeIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ScaleIcon />
              </InputAdornment>
            ),
          }}
          error
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
