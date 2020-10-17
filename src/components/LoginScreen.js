import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (username) => {
    setUsername(username);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const loginHandler = () => {
    const state = {
      username: username,
      password: password,
    };
  };

  return (
    <Paper style={{ padding: 20, width: "50%" }}>
      <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              type="email"
              value={username}
              onChange={(e) => handleUsername(e.target.value)}
              fullWidth
              autoFocus
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              style={{ textTransform: "none" }}
              variant="text"
              color="primary"
            ></Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={loginHandler}
            style={{ textTransform: "none" }}
          >
            Login
          </Button>
          {/* {isLogged ? "logged" : "not logged"} */}
        </Grid>
      </div>
    </Paper>
  );
};

export default Login;
