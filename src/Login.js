import React from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "./Actions";

function Login() {
  
  const navigate = useNavigate();

  
    
    
  

  // const onSubmitFailure = (errorMsg) => {
  //   setShowSubmitError(true);
  //   setErrorMsg(errorMsg);
  // };
  const onSubmitForm = async (e) => {
    e.preventDefault();

  //   const userDetails = { username, password };

  //   const loginUrl = "https://apis.ccbp.in/login";

  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(userDetails),
  //   };

  //   const res = await fetch(loginUrl, options);
  //   const data = await res.json();
  //   if (res.ok) {
  //     onSubmitSuccess(data.jwt_token);
  //   } else {
  //     onSubmitFailure(data.error_message);
  //   }

  const jwtToken = Cookies.get('jwt_token')
  if(jwtToken){
    navigate("/")
  }
  else{
    navigate('/login')
  }
  };



  const dispatch = useDispatch();
  const {username, password} = useSelector((state) => state.login);
  
  console.log(username);
  console.log(password);

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ mt: 5 }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>LOGIN</Typography>
          <Grid item xs={12}>
            <TextField
              sx={{ m: 3 }}
              label="Username"
              type="text"
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ m: 3 }}
              label="Password"
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
          </Grid>
          <Grid
            container
            p={2}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                onClick={onSubmitForm}
                m={3}
              >
                Login
              </Button>
              
            </Grid>
            <Grid item>
              <Link href="/register" sx={{ textDecoration: "none" }}>
                Register
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;
