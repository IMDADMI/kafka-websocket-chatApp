import { Box } from "@mui/material";
import Message from "./Message";

export default function Sender({ content }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "left" }}>
      <Box>
        <Message content={content} s_r="s" />
      </Box>
    </Box>
  );
}
