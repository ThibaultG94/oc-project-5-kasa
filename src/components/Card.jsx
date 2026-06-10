import { Link } from "react-router";

function Card({ id, title, cover }) {
  return (
    <Link to={`/listing/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}

export default Card;
