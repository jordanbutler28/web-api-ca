import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getGenres, getUpcomingMovies } from '../tmdb-api'; 

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

export default router;
