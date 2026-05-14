import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  movieId: { type: Number, unique: true, required: true},
  title: {type: String, required: true }
});

FavouriteSchema.statics.findBymovieId = function (movieId) {
  return this.findOne({ movieId: movieId });
};

export default mongoose.model('Favourite', FavouriteSchema);
