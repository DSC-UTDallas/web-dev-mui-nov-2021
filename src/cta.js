import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Cta() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
        <Grid item>
            <Button variant="contained" href="https://tinyurl.com/starship-ios" target="_blank">Download Starship for iOS</Button>
        </Grid>

        <Grid item>
            <Button variant="contained" href="https://tinyurl.com/starship-android" target="_blank">Download Starship for Android</Button>
        </Grid>
    </Grid>
  );
}

export default Cta;
