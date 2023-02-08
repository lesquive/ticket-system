import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./TicketBox.css";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import AvatarImg from "./../../shared/Avatar";

export default function TicketBox(props) {
  const {
    title,
    status,
    author,
    avatar,
    created,
    updated,
    header = false,
  } = props;
  return (
    <Box className={`${header ? "header" : ""} ticketBox`}>
      <Card variant="outlined" className="ticketCard">
        <CardContent>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ mt: "auto" }}
          >
            <Grid item className="item">
              {updated}
            </Grid>
            <Grid item className="item">
              {title}
            </Grid>
            <Grid item className="item">
              {status}
            </Grid>
            <Grid item className="item">
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
              >
                {avatar ? (
                  <Grid item>
                    <AvatarImg url={avatar} />
                  </Grid>
                ) : null}
                <Grid item>{author}</Grid>
              </Grid>
            </Grid>
            <Grid item className="item">
              {created}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
