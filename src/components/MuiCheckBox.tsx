import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckBox = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log(checked);

  console.log(skills);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox checked={checked} onChange={handleChange} />
          }></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={checked}
          onChange={handleChange}></Checkbox>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }></FormControlLabel>
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }></FormControlLabel>
            <FormControlLabel
              label="Java Script"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillsChange}
                />
              }></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default MuiCheckBox;
