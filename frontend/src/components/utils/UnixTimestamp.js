import React from "react";
import Grid from "@mui/material/Grid";

export default function UnixTimestamp(props) {
  let timestamp = props.timestamp;
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        {hours}:{minutes}:{seconds}
      </Grid>
      <Grid item>
        {month}-{day}-{year}
      </Grid>
    </Grid>
  );
}
