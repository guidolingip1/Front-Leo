import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content__card">
          <h1 className="footer-content-card__title">FAÇA PARTE</h1>
          <button className="footer-content-card__assine">ASSINE</button>
          <button className="footer-content-card__entre">ENTRE</button>
        </div>
        <div className="footer-content__card">
          <h1 className="footer-content-card__title">ACESSO RÁPIDO</h1>
          <ul className="footer-content-card-list">
            <li className='footer-content-card-list__item'><a href="">HOME</a></li>
            <li className='footer-content-card-list__item'><a href="">ENSINO</a></li>
            <li className='footer-content-card-list__item'><a href="">MATERIAIS</a></li>
            <li className='footer-content-card-list__item'><a href="">PLANO</a></li>
          </ul>
        </div>
        <div className="footer-content__card">
          <h1 className="footer-content-card__title">NOSSAS REDES</h1>
          <ul className="footer-content-card-list__socials">
            <li><a href=""><img src={instagramIcon} alt="" /></a></li>
            <li><a href=""><img src={facebookIcon} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;