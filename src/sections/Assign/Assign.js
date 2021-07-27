import './assign.css';

import cabecaInvestidor from '../../assets/images/cabeca-investidor.png';

const Assign = () => {
  return (
    <div id="Plano" className="assign-container">
      <div className="assign-content">
        <h1 className="assign-content__title">FAÇA PARTE DE UMA DAS ESCOLAS DE FINANÇAS MAIS COMPLETA DO BRASIL</h1>
        <div className="assign-content-image">
          <img className="assign-content-image__image" src={cabecaInvestidor} alt="Foto da cabeça de um investidor" />
          <div className="assign-content-assignment">
              <h1 className="assign-content-assignment__pricetag">RS$ 29,90</h1>
              <h3 className="assign-content-assignment__timetag">Mensal</h3>
            <ul className="assign-content-assignment__list">
              <li className="assign-content-assignment-list__item"> Acesso total a plataforma</li>
              <li className="assign-content-assignment-list__item"> Acesso as aulas gravadass</li>
              <li className="assign-content-assignment-list__item"> Acesso a aulas ao vivo</li>
              <li className="assign-content-assignment-list__item"> Acesso ao grupo fechado</li>
            </ul>
            <button className="assign-content-assignment-list--cta">ASSINE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Assign;