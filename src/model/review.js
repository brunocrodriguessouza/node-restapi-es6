import mongoose from 'mongoose';
import FoodTruck from './foodtruck';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: String,
  text: String,
  foodtruck: {type: Schema.Types.ObjectId, ref: 'FoodTruck'}
});

module.exports = mongoose.model('Review', ReviewSchema);