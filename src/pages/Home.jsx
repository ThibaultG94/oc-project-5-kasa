import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import listings from "../data/data.json";

function Home() {
  return (
    <>
      <Banner />
      <section className="gallery" aria-label="Liste des logements">
        {listings.map((listing) => (
          <Card
            key={listing.id}
            id={listing.id}
            title={listing.title}
            cover={listing.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
