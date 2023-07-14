import { useState } from "react";
import { Box, Stack, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <Stack spacing={3}>
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="CN">Canada</MenuItem>
          <MenuItem value="AU">United States</MenuItem>
        </TextField>

        <TextField
          label="Select Multiple Countries"
          select
          value={countries}
          onChange={handleChange2}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Pls selec country"
          error>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="CN">Canada</MenuItem>
          <MenuItem value="AU">United States</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};

export default MuiSelect;
