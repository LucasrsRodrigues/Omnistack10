import React, { useState ,useEffect } from 'react';

import api from './services/api';
import './global.css';

import './App.css';
import './Sidebar.css';
import './Main.css';
// Componente  => Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// Estado      => Informacoes mantidas pelo componente
// Propriedade => Informacoes que um componente PAI passa para o componente FILHO


function App() {

  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
    console.log(response.data)


  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username"
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
              required 
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs" 
              id="techs"
              value={techs} 
              onChange={e => setTechs(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required  value={longitude} onChange={e => setLongitude(e.target.value)}/>
            </div>
          </div>
          <button type="submit">salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58940345?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Lucas Rodrigues</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, rem.
            </p>
            <a href="https://github.com/LucasrsRodrigues">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58940345?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Lucas Rodrigues</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, rem.
            </p>
            <a href="https://github.com/LucasrsRodrigues">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58940345?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Lucas Rodrigues</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, rem.
            </p>
            <a href="https://github.com/LucasrsRodrigues">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58940345?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Lucas Rodrigues</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, rem.
            </p>
            <a href="https://github.com/LucasrsRodrigues">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
