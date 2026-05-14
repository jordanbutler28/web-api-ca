import express from 'express';
import asyncHandler from 'express-async-handler';
import Favourite from './favouriteModel'

const router = express.Router();

//Get favourites
router.get('/', async (req, res) => {
    const favourites = await Favourite.find();
    res.status(200).json(favourites);
});

//post new favourites
router.post('/', asyncHandler(async (req, res) => {
  //get movie id and title as favourite model requires
  const { movieId, title } = req.body;

  //add favourites to mongo
  await Favourite.create({ movieId, title });
  res.status(201).json({ success: true, msg: 'Favourite successfully added' });
}));

export default router;
