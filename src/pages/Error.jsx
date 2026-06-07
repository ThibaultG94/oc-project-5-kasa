import { Link } from "react-router";

function Error() {
  return (
    <section className="error" aria-labelledby="error-title">
      <h1 id="error-title" className="error__code">
        404
      </h1>
      <p className="error__message">
        Oups! La page que <br className="error__break" />
        vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d&rsquo;accueil
      </Link>
    </section>
  );
}

export default Error;
