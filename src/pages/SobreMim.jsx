import Menu from './Menu';
import minhaFoto from '/src/assets/tamires.jpg';
import '../style/SobreMim.css';

const SobreMim = () => {
  return (
    <div className="container">
      <Menu />
      <h1 className='h1'>Sobre mim</h1>
      <div className="content">
        <div className="imagemContainer">
          <img src={minhaFoto} alt="Minha Foto" className="imagem" />
        </div>
        <div className="text">
          <p className='nome'>Tamires Guedes Bernabe</p>
          <p>
            Olá! Meu nome é Tamires, tenho 22 anos e sou de Teresópolis.
            Estou no último período do curso de Desenvolvedor Frontend na <span>Tech4me</span>. Durante minha jornada, adquiri conhecimentos sólidos em HTML, CSS, Lógica JavaScript, JavaScript e React.
            Além disso, estudo Análise e Desenvolvimento de Sistemas na <span>Unifeso - Centro Universitário Serra dos Órgãos</span>, buscando expandir ainda mais meu conhecimento e habilidades na área de tecnologia.
            Estou animada para continuar aprendendo e crescendo profissionalmente!
            Estou ansiosa para conquistar meu primeiro emprego na área! Com dedicação e habilidades em constante aprimoramento, sei que logo estarei pronta para enfrentar os desafios do mercado. Estou confiante e animada para mostrar meu potencial e contribuir para projetos empolgantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
