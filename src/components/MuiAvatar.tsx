import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>MP</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>SN</Avatar>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>MP</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>SN</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Maha"></Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="Mah"></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <Avatar variant="square" sx={{ bgcolor: "primary.light" }}>
          MP
        </Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>
          SN
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
