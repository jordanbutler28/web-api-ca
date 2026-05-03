import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchlistIcon from "../components/cardIcons/removeFromWatchlist";

const WatchlistMoviesPage = () => {
  const {mustWatchs: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchsMovieQueries = useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });
  
  // Check if any of the parallel queries is still loading.
  const isPending = mustWatchsMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = mustWatchsMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Your Watchlist"
      movies={movies}
      action={(movie) => {
        return (
            <RemoveFromWatchlistIcon movie={movie} />
        );
      }}
    />
  );

};

export default WatchlistMoviesPage;
