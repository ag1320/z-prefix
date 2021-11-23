import { useParams, NavLink, Navigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Grid,
} from "@mui/material";

async function getData(userId) {
  let res = await axios.post("http://localhost:3001/getUsersPosts", {
    userId,
  });
  return res.data;
}

export default function Post({
  data,
  userId,
  isUsersPost,
  setIsUsersPost,
  isAuthenticated,
}) {
  let { postId } = useParams();
  const filterPosts = (obj) => {
    return obj.post_id == postId;
  };
  let post = data.filter(filterPosts)[0];

  function checkUser(obj) {
    return obj.post_id == postId;
  }

  useEffect(() => {
    let mounted = true;
    getData(userId, postId).then((items) => {
      if (mounted && isAuthenticated) {
        console.log(items);
        let filteredPosts = items.filter(checkUser);
        filteredPosts.length > 0 ? setIsUsersPost(true) : setIsUsersPost(false);
      }
    });
    return () => (mounted = false);
  }, []);

  console.log(isUsersPost);
  return (
    <>
      {post ? (
        <Grid container justifyContent="center">
          <Grid item style={{ margin: 100 }}>
            <Card
              variant="oulined"
              style={{ maxWidth: "80vw", maxHeight: "auto" }}
            >
              <CardHeader
                title={post.title}
                avatar={
                  <NavLink to="/">
                    <IconButton>
                      <ChevronLeftIcon />
                    </IconButton>
                  </NavLink>
                }
                action={
                  isUsersPost ? (
                    <>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )
                }
              />
              <CardContent>
                <Typography>{post.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
