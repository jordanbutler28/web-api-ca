import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router'; //gets paramters from url
import { getMovieRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlistIcon';

const MovieRecommendationsPage = (props) => {
  const { id } = useParams(); 
  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['MovieRecommendations', { id }],
      queryFn: getMovieRecommendations,
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
      title="Recommended Movies"
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
export default MovieRecommendationsPage;
