import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
