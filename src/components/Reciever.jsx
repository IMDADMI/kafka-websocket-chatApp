import { Box } from "@mui/material";
import Message from "./Message";

export default function Reciever({ content }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      <Box>
        <Message content={content} s_r="r" />
      </Box>
    </Box>
  );
}
