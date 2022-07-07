import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, indigo, cyan, teal, green, blue, yellow, bluegrey } from "@mui/material/colors";

const DEFAULT_VALUE = {
  email: "",
  password: ""
};

export default function LetterAvatars() {
  const [profilePicture, setProfilePicture] = useState(
    JSON.parse(localStorage.getItem("active-data")) || DEFAULT_VALUE
  );

  return (
    <Stack direction="row-reverse" spacing={10}>
      <Avatar
        sx={{
          bgcolor: teal[100],
          border: "0.2px solid white",
          color: "white",
          width: 55,
          height: 55,
          margin: 1
        }}
      >{profilePicture.email.charAt(0).toUpperCase()}
      </Avatar>
    </Stack>
  );
}
