import React, { useState } from "react";
import {
  Paper as paper,
  Grid as grid,
  TextField as textfield,
  Button as button,
} from "@material-ui/core";

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
    <paper style={{ padding: 20, width: "50%" }}>
      <div>
        <grid container spacing={8} alignItems="flex-end">
          <grid item md={true} sm={true} xs={true}>
            <textfield
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
          </grid>
        </grid>
        <grid container spacing={8} alignItems="flex-end">
          <grid item md={true} sm={true} xs={true}>
            <textfield
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </grid>
        </grid>
        <grid container alignItems="center" justify="space-between">
          <grid item>
            <button
              disableFocusRipple
              disableRipple
              style={{ textTransform: "none" }}
              variant="text"
              color="primary"
            ></button>
          </grid>
        </grid>
        <grid container justify="center" style={{ marginTop: "10px" }}>
          <button
            variant="outlined"
            color="primary"
            onClick={loginHandler}
            style={{ textTransform: "none" }}
          >
            Login
          </button>
          {/* {isLogged ? "logged" : "not logged"} */}
        </grid>
      </div>
    </paper>
  );
};

export default Login;
