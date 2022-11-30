import mongoose from 'mongoose';
const schema = mongoose.Schema({
  content: String,
  hearts: Number,
  liked: Boolean,
  image : String,
  cover : String,
  topic: String,
  time: String,
  replies: Number,
  retuits: Number,
  dislikes:Number,
  disliked:Boolean,
  username:String,
  handle:String,
}, {collection: 'tuits'});
export default schema;
