import './card.css';

const Card = ({title, content}) => {
  {/*Se eu tenho ícone eu disponho ele, se não não disponho */}
  return (
    <div className="cardContainer">
      <h2 className="card__title">{title}</h2>
      <h3 className="card__content">{content}</h3>
    </div>
  );
}

export default Card;