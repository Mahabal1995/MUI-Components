import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
const MuiPicker = () => {
  const [date, setDate] = useState<Date | null>(null);
  console.log(date);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params: any) => <TextField {...params} />}
        value={date}
        onChange={(newValue: any) => {
          setDate(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiPicker;
