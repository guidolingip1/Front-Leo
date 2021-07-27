import { CardMaterials } from '../../components/CardMaterials';
import pdf_img from '../../assets/images/PDF.png';
import video_img from '../../assets/images/VIDEO.png';
import live_img from '../../assets/images/LIVE.png';
import planilha_img from '../../assets/images/PLANILHA.png';

import './materials.css';

const Materials = () => {
  return (
    <div id="Materiais" className="materials-container">
      <div className="materials-content">
        <h1 className="materials-content__title">FORMAS DE ENSINO</h1>
        <div className="materials-content__cards">
          <CardMaterials ico={live_img} content="Toda semana temos uma aula ao vivo onde uma empresa ou ação é analisada por um profissional capacitado"/>
          <CardMaterials ico={pdf_img} content="Todas as aulas acompanham um PDF contendo as informações essenciais sobre o assunto abordado"/>
          <CardMaterials ico={video_img} content="Aulas gravadas e cursos serão disponibilizados em forma de vídeo"/>
          <CardMaterials ico={planilha_img} content="Aprenda a criar planilhas para seus investimentos e como controlar seus gastos"/>
        </div>
      </div>
    </div>
  );
}
export default Materials;