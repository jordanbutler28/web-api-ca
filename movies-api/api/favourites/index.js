import express from 'express';
//import asyncHandler from 'express-async-handler';
import Favourite from './favouriteModel'

const router = express.Router();

// Get favourites
router.get('/', async (req, res) => {
    const favourites = await Favourite.find();
    res.status(200).json(favourites);
});

export default router;
