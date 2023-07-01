import { Box } from "@mui/material";
import Header from "./componenets/Header";
import Login from "./userLogin/Login";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <Box className = "hello" sx={{backgroundColor : 'black' ,height : "700px" , m : -1}}>
      <Header />
    </Box>
  );
}

export default App;
