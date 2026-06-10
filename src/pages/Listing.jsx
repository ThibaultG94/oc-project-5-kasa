import { Navigate, useParams } from "react-router";
import Slideshow from "../components/Slideshow";
import listings from "../data/data.json";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Listing() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id);

  if (!listing) return <Navigate to="/404" replace />;

  return (
    <article className="listing">
      <Slideshow pictures={listing.pictures} title={listing.title} />

      <div className="listing__header">
        <div className="listing__heading">
          <h1 className="listing__title">{listing.title}</h1>
          <p className="listing__location">{listing.location}</p>

          <ul className="listing__tags">
            {listing.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="listing__aside">
          <div className="listing__host">
            <span className="listing__host-name">{listing.host.name}</span>
            <img
              src={listing.host.picture}
              alt={listing.host.name}
              className="listing__host-picture"
            />
          </div>
          <Rating rating={listing.rating} />
        </div>
      </div>

      <div className="listing__details">
        <Collapse title="Description" content={listing.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="housing__equipments">
              {listing.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </article>
  );
}

export default Listing;
