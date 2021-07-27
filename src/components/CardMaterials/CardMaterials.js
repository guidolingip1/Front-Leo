import './cardmaterials.css';

const CardMaterials = ({ico, content}) => {
  {/*Se eu tenho ícone eu disponho ele, se não não disponho */}
  return (
    <div className="cardMaterialsContainer">
      <img className="cardMaterials__ico" src={ico} alt="" />
      <h3 className="cardMaterials__content">{content}</h3>
    </div>
  );
}

export default CardMaterials;