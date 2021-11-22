import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Public from "./components/Public";
import Create from "./components/Create";
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { Button } from '@mui/material'

async function getData() {
  let res = await axios.get("http://localhost:3001/");
  return res;
}

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [data, setData] = useState([]);
  let [checked, setChecked] = useState(true);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

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
    if (checked) {
      //sign up
    } else {
      //login
    }
    setIsAuthenticated(true);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    let mounted = true;
    getData().then((items) => {
      if (mounted) {
        setData(items);
      }
    });
    console.log(data);

    return () => (mounted = false);
  }, []);

  return (
    <>
      <div className="topbar">
        <NavLink to="/Login" className = 'App-link'>
          <Button>Login</Button>
        </NavLink>
        <NavLink to="/Login">
          <Button>Create</Button>
        </NavLink>
      </div>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Public />} />
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
                />
              }
            />
            <Route
              path="/create"
              element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                  <Create />
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
