import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from "./Menu";
import '../style/AsteroideDetalhes.css';

const AsteroideDetalhes = () => {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState(null);

  useEffect(() => {
    const requisicao = async () => {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=mnKZHwpkhCqZQ0I1UMlhbU2V6zKvJwk9NQEmihO7`);
      setAsteroide(response.data);
    };

    requisicao();
  }, [id]);

  return (
    <>
      <Menu />
      <div className="asteroide-detalhes">
        <h1 className="titulo">Detalhes do asteroide</h1>
        <h2 className="asteroide-nome">Nome: {asteroide?.name}</h2>
        <p className="asteroide-perigoso">Perigoso: {asteroide?.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
        <p className="asteroide-diametro">Diâmetro máximo estimado em quilômetros: {asteroide?.estimated_diameter?.kilometers?.estimated_diameter_max} km</p>
        <p className="asteroide-velocidade">Velocidade relativa do objeto por hora: {asteroide?.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour} km/h</p>
        <p className="asteroide-magnitude">Magnitude Absoluta: {asteroide?.absolute_magnitude_h}</p>
      </div>
    </>
  );
};

export default AsteroideDetalhes;
