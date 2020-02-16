const mongoose = require ('mongoose');
const PointSchema = require('./utils/PointSchema');
//Schema e a estruturacao 
const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});
//nome no banco e o Schema
module.exports = mongoose.model('Dev', DevSchema)