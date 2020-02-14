const { Router } = require('express');
const axios = require('axios');
const routes = Router();
const Dev = require('./models/Dev');
//Rota de usuarios
routes.post('/devs', async (req, res) =>  {
  // console.log(req.body);

  const { github_username, techs } = req.body;

  const response = await axios.get(`https://api.github.com/users/${github_username}`)
    // console.log(response.data);

    const { name = login, avatar_url, bio} = response.data;

    // console.log(name, avatar_url, bio, github_username);

    const techsArray = techs.split(',').map(tech => tech.trim());
    
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray
    });

    return  res.json(dev);
  
});

module.exports = routes;