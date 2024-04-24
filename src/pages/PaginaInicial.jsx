import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import '../style/PaginaInicial.css';


function PaginaInicial() {
  const dataAtual = new Date().toISOString().split('T')[0]

  const [listaAsteroides, setAsteroidesLista] = useState([]);

  useEffect(() => {
    const requisicao = async () => {
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=mnKZHwpkhCqZQ0I1UMlhbU2V6zKvJwk9NQEmihO7`;
      const response = await axios.get(url);
      setAsteroidesLista(response.data.near_earth_objects[dataAtual]);
    };

    requisicao();
  }, [dataAtual]);

  return (
    <>
      <Menu />
      <h1>Asteroides próximos da Terra</h1>
      {listaAsteroides.map((asteroide) => (
        <Link to={`/asteroide/${asteroide.id}`} key={asteroide.id} >
          <div className="link-container">
            <h2 className="link-titulo">Nome do objeto: {asteroide.name}</h2>
            <p className="link-perigoso">É potencialmente perigoso? {asteroide.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
            <p className="link-diametro">Diâmetro máximo estimado em quilômetros: {asteroide.estimated_diameter.kilometers.estimated_diameter_max} km</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default PaginaInicial;
