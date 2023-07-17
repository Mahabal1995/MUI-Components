import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  colors,
} from "@mui/material";

const MuiRadiobtn = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row>
          <FormControlLabel
            value="0-2"
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
          />
          <FormControlLabel value="2-3" control={<Radio />} label="2-3" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadiobtn;
