import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarIcon from '@mui/icons-material/StarRounded';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';

export default function MovieCard({ movie, action }) {

  const { favorites, addToFavorites, mustWatchs, addToWatchlist } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (mustWatchs.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    addToWatchlist(movie);
  };

  //to round vote average to 1 decimal place
  const voteAvgRating = movie.vote_average.toFixed(1); 

  return (
    <Card>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
      />

      <Link to={`/movies/${movie.id}`}>
        <CardMedia
          sx={{ height: 350 }}
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : img
          }
        />
      </Link>

      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">
              {movie.title}
            </Typography>
          </Grid>
        
        <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography variant="h6">
                  <CalendarIcon fontSize="small" />
                  {"  "} {movie.release_date} 
                </Typography>
              </Grid>

            <Grid item xs={7}>
              <Typography variant="h6">
                <StarIcon />
                {"  "} {voteAvgRating}
              </Typography>
            </Grid>
          </Grid>
    </Grid>

    </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
          {action(movie)}
      
        <Link to={`/movies/${movie.id}`}>
          <Button variant="contained" size="medium" color="secondary" sx={{ marginLeft: 1 }} disableElevation>
             More Info
          </Button>
        </Link>
        
      </CardActions>

    </Card>
  );
}
