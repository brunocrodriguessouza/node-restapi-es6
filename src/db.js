import mongoose from 'mongoose';

export default callback => {
  const db = mongoose.connect('mongodb://localhost:27017/ruralspoon');
  callback(db);
}