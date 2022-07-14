import React from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { setFirstname, setLastname, setUsername, setPassword } from "./Actions";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const { firstname, lastname, username, password } = useSelector(
    (state) => state.registration
  );
  const navigate = useNavigate();
  const onRegisterSuccess = () => {
    
    navigate("/login");
  };
  const onRegisterFailure = (errMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errMsg);
  };

  const onRegisterForm = async (e) => {
    e.preventDefault();

    const registerDetails = { firstname, lastname, username, password };
    
    // const res = await axios
    //   .post("http://localhost:8080/api/users/addUser", { firstname:firstname, lastname:lastname, username:username, password:password })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // if (status === 200) {
    //   onRegisterSuccess();
    // } else {
    //   onRegisterFailure(res.error);
    // }

    // const userDetails = { username, password };
    const url = "http://localhost:8080/api/users/addUser";
    const options = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerDetails),
    };
    
  await fetch(url, options).then(handleResponse);
    
    
    
  };

  function handleResponse(response){
    return response.text().then(text => {
      const data = text && JSON.parse(text)
      if(response.ok){
        onRegisterSuccess()
      }
      else{
        const error = (data && data.message) || response.statusText
        onRegisterFailure(error)
      }
    })
  }

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
          <Typography>Register</Typography>
          <Grid item xs={12}>
            <TextField
              sx={{ m: 3 }}
              label="FIRST NAME"
              type="text"
              value={firstname}
              onChange={(e) => dispatch(setFirstname(e.target.value))}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ m: 3 }}
              label="LAST NAME"
              type="text"
              value={lastname}
              onChange={(e) => dispatch(setLastname(e.target.value))}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ m: 3 }}
              label="USERNAME"
              type="text"
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ m: 3 }}
              label="PASSWORD"
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
                m={3}
                onClick={onRegisterForm}
              >
                Register
              </Button>
              {showSubmitError && <Typography>{errorMsg}</Typography>}
            </Grid>
            <Grid item>
              <Link href="/login" sx={{ textDecoration: "none" }}>
                Cancel
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
