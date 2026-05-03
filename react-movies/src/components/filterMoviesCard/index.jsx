import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getGenres } from "../../api/tmdb-api";
import Spinner from '../spinner';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "#f0efef",
    borderRadius: 2,
  };

export default function FilterMoviesCard(props) {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleRatingChange = (e, value) => {
  handleChange(e, "rating", value);
};

  return (
    <Card sx={{backgroundColor: "secondary.main"}} >
      
      <CardContent>
        <Grid container sx={{ justifyContent: "center" }}>
          <Typography variant="h5" component="h1">
            Search
            <SearchIcon fontSize="medium" sx={{ marginLeft: 1 }} />
          </Typography>
        </Grid>

        <TextField
            sx={{...formControl}}
            id="filled-search"
            label="Search Movie Title"
            type="search"
            variant="outlined"
            value={props.titleFilter}
            onChange={handleTextChange}
        />

        <Grid container sx={{ justifyContent: "center" }}>
          <Typography variant="h5" component="h1"> Genre </Typography>
        </Grid>

        <FormControl sx={{...formControl}}>
            <InputLabel id="genre-label"></InputLabel>
              <Select
              labelId="genre-label"
              id="genre-select"
              defaultValue=""
              value={props.genreFilter}
              onChange={handleGenreChange}
              >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
             </Select>
        </FormControl>

        <Grid container sx={{ justifyContent: "center" }}>
          <Typography variant="h5" component="h1"> Rating </Typography>
        </Grid>

        <Slider
          aria-label="Rating Filter Slider"
          value = {props.ratingFilter}
          onChange={handleRatingChange}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
        />

      </CardContent>
    </Card>
  );
}
