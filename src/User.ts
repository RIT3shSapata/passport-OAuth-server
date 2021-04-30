import mongoose from 'mongoose';

const user = new mongoose.Schema({
  googleId: {
    require: false,
    type: String,
  },
  githubId: {
    require: false,
    type: String,
  },
  username: {
    require: true,
    type: String,
  },
});

export default mongoose.model('User', user);
