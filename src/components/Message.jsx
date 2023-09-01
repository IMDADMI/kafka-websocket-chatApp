import { Box, Typography } from "@mui/material";
import React from "react";
export default function Message({ content, s_r }) {
  const color = s_r === "s" ? "#088FFA" : "#145DA0";
  return (
    <Box
      mx={3}
      my={1}
      sx={{
        transition: "ease-in-out",
        border: "1px solid white",
        borderRadius: 2,
        p: 1,
        backgroundColor: color,
      }}
    >
      <Typography variant="body1" color="white">
        {content}
      </Typography>
    </Box>
  );
}
