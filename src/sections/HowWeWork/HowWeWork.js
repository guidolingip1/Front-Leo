import { Card } from '../../components/Card';

import './howWeWork.css';

const HowWeWork = () => {
  return (
    /*How we work -> hww*/
    <div id="Ensino" className="hww-container">
      <div className="hww-content">
        <h1 className="hww-content__title">COMO OPERAMOS</h1>
        <div className="hww-content__cards">
          <Card title="RELATÓRIOS SEMANAIS" content="Não sei o que escrever aqui vai me ajudar LEO."/>
          <Card title="LIVES SEMANAIS" content="Todas as semanas temos lives realizando a análise de uma ação específica"/>
          <Card title="PLANILHAS EM PDF" content="ConteNão sei o que escrever aqui vai me ajudar LEO"/>
        </div>
      </div>
    </div>
  );
}
 
export default HowWeWork;