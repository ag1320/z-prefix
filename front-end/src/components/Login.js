import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";

export default function Login({
  checked,
  username,
  password,
  handleUserChange,
  handlePassChange,
  handleSwitchChange,
  handleSubmit,
  isAuthenticated
}) {
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/create" />
      ) : (
        <>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={checked} onChange={handleSwitchChange} />
              }
              label="Sign up"
            />
          </FormGroup>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            autoComplete="current-password"
            onChange={handleUserChange}
            value={username}
            placeholder="Username"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handlePassChange}
            value={password}
            placeholder="Password"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </>
  );
}
