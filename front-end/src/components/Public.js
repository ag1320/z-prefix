import { useEffect } from "react";
import axios from "axios";
import Post from "../components/Post.js";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

async function getData() {
  let res = await axios.get("http://localhost:3001/posts");
  return res.data;
}

export default function Create({data, setData}) {

  useEffect(() => {
    let mounted = true;
    getData().then((items) => {
      if (mounted) {
        setData(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Grid container spacing={4} justifyContent="center">
      {data.map((post, index) => {
        return (
          <Grid item>
            <NavLink to={`/${index}`} style  = {{textDecoration: 'none'}}>
              <Post post={post} />
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
