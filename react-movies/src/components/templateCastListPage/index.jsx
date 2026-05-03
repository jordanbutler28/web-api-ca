import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CastList from "../castList";
import Header from "../headerMovieList";

function CastListPageTemplate({ casts, title }) {

  let displayedCast = casts
    .filter((c) => c.known_for_department === "Acting");

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>

      <Grid container sx={{ flex: "1 1 500px" }}>
        <CastList casts={displayedCast} />
      </Grid>
    </Grid>
  );
}

export default CastListPageTemplate;