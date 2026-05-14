import mongoose from 'mongoose';

const FavouriteSchema = new Schema({
  movieId: { type: number, unique: true, required: true},
  title: {type: String, required: true }
});

FavouriteSchema.statics.findBymovieId = function (movieId) {
  return this.findOne({ movieId: movieId });
};

export default mongoose.model('Favourites', FavouriteSchema);
