import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getGenres, getUpcomingMovies, getTopRatedMovies, getNowPlayingMovies, getTrendingMovies, getMovie, getMovieImages, getMovieRecommendations, getMovieReviews } from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/genre/movie/list', asyncHandler(async (req, res) => {
    const movieGenres = await getGenres();
    res.status(200).json(movieGenres);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/trending/movie/day', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieRecommendations = await getMovieRecommendations(id);
    res.status(200).json(movieRecommendations);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieReviews = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

export default router;
  