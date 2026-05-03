import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlistIcon';

const HomePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    //React Query will cache result under this key
    queryKey: ['discover'],
    //function that fetches the data
    queryFn: getMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  //extracts movies array from tmdb response
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  //unsure if this is necessary
  const mustWatchs = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatchs', JSON.stringify(mustWatchs))
  const addToWatchlist = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <AddToWatchlistIcon movie={movie} />
          </>
        );
          
      }}
    />
  );

};
export default HomePage;
