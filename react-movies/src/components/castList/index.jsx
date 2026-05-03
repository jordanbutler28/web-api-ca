import React from "react";
import MovieCastCard from "../movieCastCard";
import Grid from "@mui/material/Grid";

const CastList = (props) => {
  //turn data into multiple ui cards
  const actingCast = props.casts.filter((c) => c.known_for_department === "Acting");

  let castCards = actingCast.map((c) => (
    //each actor gets a card
    <Grid
      key={c.id}
      size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
      sx={{ padding: "20px" }}
    >
      <MovieCastCard credits={c} />
    </Grid>
  ));

  return castCards;
};

export default CastList;