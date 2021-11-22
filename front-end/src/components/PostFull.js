import { useParams, NavLink } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton
} from "@mui/material";

export default function Post({ data }) {
  let { postid } = useParams();
  let post = data[postid];
  console.log(post);
  return (
    <Card variant="oulined" style={{ maxWidth: "80vw", maxHeight: "auto" }}>
      <CardHeader
        title={post.title}
        avatar={
          <NavLink to="/">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </NavLink>
        }
      />
      <CardContent>
        <Typography>{post.body}</Typography>
      </CardContent>
    </Card>
  );
}
