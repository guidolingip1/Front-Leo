import investidor from '../../assets/images/investidor.png';

import './header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="header-content__title">Como a LEO vai te ajudar?</h1>
        <p className="header-content__description">Somos uma plataforma educacional de finanças e negócios com aulas divididas entre 
          finanças pessoais, investimentos em renda fixa e variável, análise de empresas
          e resultados, finanças para negócios, empreendedorismo, e muito mais!
        </p>
        <div className="header-content__img__list">
          <img className="header-content__img" src={investidor} alt="Imagem de um investidor com stocks" />
          <div className="header-content__list">
            <h2 className="header-content-list__title">A LEO é ideal para quem busca</h2>
            <ul className="header-content-list__list">
              <li className="header-content-list__item"> Organizar as finanças começando do zero</li>
              <li className="header-content-list__item"> Desenvolver a inteligência emocional</li>
              <li className="header-content-list__item"> Construir patrimônio</li>
              <li className="header-content-list__item"> Investir com alta performance</li>
              <li className="header-content-list__item"> Criar e assegurar planos ambiciosos</li>
              <li className="header-content-list__item"> Conhecer as empresas da bolsa de valores</li>
              <li className="header-content-list__item"> Planejar e CONQUISTAR!</li>
            </ul>
            <button className="header-content-list__cta">VEJA MAIS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;