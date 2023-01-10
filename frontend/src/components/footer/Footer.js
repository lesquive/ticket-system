import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import "./Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        TICKET SYSTEM
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box className="footerBox">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid className="message" item xs={12}>
          <Typography variant="body1"> From Luis</Typography>
          <div className="icon" role="img" aria-label="rocket">
            🚀
          </div>
        </Grid>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
  );
}
