import { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);

  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableElevation
          onClick={() => alert("cilcked....")}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* The onchange event on togglebutton group sends two paramenters 
      one is the event and 
      the value of any button that got changed
      we have an 'exclusive' prop 
      when we include that we can select or toggle any one button at a time 
      and we need to have state variable and handlechange function according to handle single value
      like -> string | null in place of string[] basically it cats as radio btns */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
          size="medium"
          color="secondary"
          orientation="vertical">
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
