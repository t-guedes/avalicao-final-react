import { Link } from 'react-router-dom';
import '../style/Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="title">Buscando Asteroides</div>
      <div>
        <Link to="/" className="menu-item">
          Página Inicial
        </Link>
        <Link to="/SobreMim" className="menu-item">
          Sobre Mim
        </Link>
      </div>
    </div>
  );
};

export default Menu;
