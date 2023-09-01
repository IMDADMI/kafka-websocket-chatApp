import { Box, Grid } from "@mui/material";
import Chat from "./components/chat";
function App() {
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <Chat />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
