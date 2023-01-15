import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./TicketBox.css";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

export default function TicketBox(props) {
  const { title, status, author, avatar, created, updated } = props;
  return (
    <Box className="ticketBox">
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
            <Grid item>
              <>{title}</>
            </Grid>
            <Grid item>
              <>{status}</>
            </Grid>
            <Grid item>
              <>{author}</>
            </Grid>
            <Grid item>
              <>{avatar}</>
            </Grid>
            <Grid item>
              <>{created} </>
            </Grid>
            <Grid item>
              <>{updated}</>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
