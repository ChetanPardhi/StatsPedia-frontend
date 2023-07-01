import {React, useState} from "react";
import Lottie from "react-lottie";
import animationData from "../animations/login/login.json";
import { Box, Button, ListItem, Stack, TextField } from "@mui/material";
import logo from "../images/buy_it.png";
import "./login.css";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box style={{ margin: "40px 80px 20px 80px" , boxShadow: "2px 2px 10px black" , height : "530px"}}>
        <Stack direction="row" >
      <ListItem >
        <Stack
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ListItem>
            <img
              src={logo}
              style={{
                height: "100px",
                width: "100px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
          </ListItem>
          <ListItem
            style={{
              display: "contents",
              textAlign: "center",
              fontFamily: "Jost",
            }}
          >
            <h1>Hello Again!</h1>
            <h4 style={{ marginTop: "-10px" }}>
              Welcome to India's largest grossing website
            </h4>
          </ListItem>
          <ListItem
            style={{
              rowGap: "11px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
            id="outlined"
            label ="Email"
              style={{ fontFamily: "Jost", width: "50%" }}
            ></TextField>
            <TextField
            id="outlined"
            label ="Password"
            type={showPassword ? 'text' : 'password'}
              style={{ fontFamily: "Jost", width: "50%" }}
            ></TextField>
            <Button variant="contained" color="error" style={{width : "50%"}}>Login</Button>
          </ListItem>
        </Stack>
      </ListItem>
      <ListItem >
        <Lottie
          style={{ marginTop: "50px" }}
          options={defaultOptions}
          height={400}
          width={400}
        />
      </ListItem>
    </Stack>
    </Box>
  );
}
