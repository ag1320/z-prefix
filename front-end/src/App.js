import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Public from "./components/Public";
import Create from "./components/Create";
import PostFull from './components/PostFull.js'
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [checked, setChecked] = useState(true);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isLoginError, setIsLoginError] = useState(false);
  let [isSignupError, setIsSignupError] = useState(false);
  let [isSignupSuccess, setIsSignupSuccess] = useState(false);
  let [data, setData] = useState([]);
  let [userId, setUserId] = useState(0);

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let endpoint = "";
    if (checked) {
      endpoint = "signup";
    } else {
      endpoint = "login";
    }
    axios
      .post(`http://localhost:3001/${endpoint}`, {
        username,
        password,
      })
      .then(function (response) {
        if (endpoint === "login") {
          setIsAuthenticated(true);
          setUserId(response.data.user_id)
        } else {
          setIsSignupSuccess(true);
        }
      })
      .catch(function (error) {
        if (endpoint === "login") {
          setIsLoginError(true);
        } else {
          setIsSignupError(true);
        }
      });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="topbar">
      <NavLink to="/" className="App-link">
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/Login" className="App-link">
          <Button>Login</Button>
        </NavLink>
        <NavLink to="/Login">
          <Button>Create</Button>
        </NavLink>
      </div>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Public data = {data} setData = {setData}/>} />
            <Route path="/:postid" element={<PostFull data = {data}/>} />
            <Route
              path="/login"
              element={
                <Login
                  isAuthenticated={isAuthenticated}
                  checked={checked}
                  username={username}
                  password={password}
                  handleUserChange={handleUserChange}
                  handlePassChange={handlePassChange}
                  handleSwitchChange={handleSwitchChange}
                  handleSubmit={handleSubmit}
                  isLoginError={isLoginError}
                  setIsLoginError={setIsLoginError}
                  isSignupError={isSignupError}
                  setIsSignupError={setIsSignupError}
                  isSignupSuccess={isSignupSuccess}
                  setIsSignupSuccess={setIsSignupSuccess}
                />
              }
            />
            <Route
              path="/create"
              element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                  <Create userId = {userId}/>
                </RequireAuth>
              }
            />
          </Routes>
        </header>
      </div>
    </>
  );
}

export default App;
