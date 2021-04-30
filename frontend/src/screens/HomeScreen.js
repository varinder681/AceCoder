import React from "react";
import HomeTable from "../components/rp/HomeTable";
import Upper from "../components/rp/Upper";
import Grid from "@material-ui/core/Grid";
import HomeSide from "../components/rp/HomeSide";

const Home = () => {
  return (
    <Grid container direction="column" spacing="4" alignItems="center">
              <Upper />
              <Grid
                container
                item
                xs={11}
                spacing="4"
                style={{ marginTop: "6rem" }}
              >
                <HomeTable />
                <HomeSide />
              </Grid>
            </Grid>
  );
};

export default Home;
