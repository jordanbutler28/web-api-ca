import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlistIcon";

const topRatedMoviesPage = () => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: getTopRatedMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated Movies"
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
export default topRatedMoviesPage;
