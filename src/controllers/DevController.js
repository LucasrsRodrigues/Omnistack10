const axios = require('axios');
const Dev = require('../models/Dev');


// index (lista), show (unico), store (crar), update (alterar), destroy(deletar)
module.exports= {

  async index(req,res){
    const devs = await Dev.find();

    return res.json(devs);
  }, 

  async store (req, res){
    // console.log(req.body);
  
    const { github_username, techs, latitude, longitude } = req.body;
  
    let dev = await Dev.findOne({ github_username });

    if(!dev){
      const response = await axios.get(`https://api.github.com/users/${github_username}`)
      // console.log(response.data);
  
      const { name = login, avatar_url, bio} = response.data;
  
      // console.log(name, avatar_url, bio, github_username);
  
      const techsArray = techs.split(',').map(tech => tech.trim());
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
        
      });

    }

    
  
      return  res.json(dev);
    }
};