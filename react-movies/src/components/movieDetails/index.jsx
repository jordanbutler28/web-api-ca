import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import PublicIcon from '@mui/icons-material/Public';
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import Button from "@mui/material/Button";
import TrailerIcon from '@mui/icons-material/Slideshow';
import Tooltip from "@mui/material/Tooltip";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    marginTop: 2.5,
    gap: 0.5,
    alignItems: "center"
};

const chip = { margin: 0.5, display: "flex" };

const MovieDetails = ({ movie }) => {  
const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <Paper sx={{ padding: 2, marginTop: 2 }}>

      <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
        Overview 
        <Tooltip title="Watch the movie">
        <a href={movie.homepage}>
          <TrailerIcon color="primary" sx={{marginLeft:2}}/>
        </a>
        </Tooltip>
      </Typography>

      <Typography variant="h6" component="p" sx={{ marginTop: 2 }}>
        {movie.overview} 
      </Typography>

    </Paper>
      
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}

        <li><Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} /></li>
        <li><Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`}/></li>
        <li><Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`}/></li>
        <li><Chip label={`Released: ${movie.release_date}`} /></li>
        
        <li>
        <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
          {movie.production_countries.map((country) => (
            <li key={country.name}>
              <Chip label={country.name} sx={{...chip}} />
            </li>
          ))}

      </Paper>
      
      <Tooltip title="See recommended movies">
        <Button variant="contained" color="secondary" size="large" href={`/movies/${movie.id}/recommendations`} sx={{ marginTop: 1 }}>
            Recommended
        </Button>
      </Tooltip>

      <Tooltip title="See movie credits">
        <Button variant="contained" color="secondary" size="large" href={`/movies/${movie.id}/cast`} sx={{ marginTop: 1, marginLeft: 2 }}>
            Cast List
        </Button>
      </Tooltip>    

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
      <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
