import './navbar.css';

import ico from '../../assets/images/logo1.svg';

const Navbar = () => {
  return (
      <nav className="main-nav-container">
        <div className="main-nav-content">
          <ul className="main-nav__list">
            <img className="main-nav__ico" src={ico} alt="Icone do Site" />
            <li className="main-nav__item"><a href="#Ensino">Ensino</a></li>
            <li className="main-nav__item"><a href="#Materiais">Materiais</a></li>
            <li className="main-nav__item"><a href="">Quem somos?</a></li>
            <li className="main-nav__item"><a href="#Plano">Plano</a></li>
            <li className="main-nav__item"><a href="#Entrar">Entrar</a></li>
            <li className="main-nav__item main-nav__item--cta"><a href="#Assinar">Assinar</a></li>
          </ul>
        </div>
      </nav>
  );
}
 
export default Navbar;