import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes,} from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage';
import MoviesInCinemasPage from './pages/moviesInCinemasPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import MovieRecommendationsPage from "./pages/movieRecommendations";
import CastListPage from "./pages/movieCastListPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const theme = createTheme({
  typography: {
    h4: {
      fontFamily: 'Prosto One',
      padding: ".2em",
    },
    h5: {
      fontFamily: 'Pontano Sans',}},
  palette: {
    primary: {
      main: '#C5456F',
    },
    secondary: {
      main: '#CEE198',
    },
    accent: {
      main: '#82D26F',
    },
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/watchlist" element={<WatchlistMoviesPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/:id/recommendations" element={<MovieRecommendationsPage />} />
              <Route path="/movies/:id/cast" element={<CastListPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/in-cinemas" element={<MoviesInCinemasPage />} />
              <Route path="/movies/trending" element={<TrendingMoviesPage />} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
