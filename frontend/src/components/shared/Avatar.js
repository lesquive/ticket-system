import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function AvatarImg(props) {
  return <Avatar alt={props.alt} src={props.url} />;
}
