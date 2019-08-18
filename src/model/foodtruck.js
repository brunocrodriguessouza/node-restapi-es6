import mongoose from 'mongoose';
import Review from './review';
const Schema = mongoose.Schema;

const FoodTruckSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    foodtype: {
      type: String,
      required: true
    },
    avgcost: Number,
    geometry: {
      type: { type: String, default: 'Point' },
      coordinates: [Number]
    },
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
  });

module.exports = mongoose.model('FoodTruck', FoodTruckSchema);
