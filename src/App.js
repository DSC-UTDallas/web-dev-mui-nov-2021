import "./App.css";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Reviews from "./reviews.json";
import Grid from "@mui/material/Grid";
import CallToAction from "./cta.js";

function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <Avatar
            alt="Tobor"
            src="./tobor.png"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>

        <Grid item>
          <Typography variant="h1" component="div">
            Meet Tobor!
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" component="div">
            Tobor is UTD's Trusty Delivery Robot. Comets all over campus use
            this handy service to deliver food and packages.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h3" component="div">
            Read Reviews about Tobor!
          </Typography>
        </Grid>

        {Reviews.map((userReview) => (
          <Grid item key={userReview.id}>
            <Card sx={{ maxWidth: 245 }}>
              <CardContent>
                <Typography variant="h5">{userReview.name}</Typography>
                <Rating value={userReview.rating} readOnly />
                <Typography variant="body2">{userReview.userReview}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item>
          <Typography variant="h2" component="div">
            Use Tobor today to get your next on-campus delivery!
          </Typography>
        </Grid>

        <Grid item>
          <CallToAction />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
