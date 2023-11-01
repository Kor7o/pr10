import "../components/Add.css";
import Logements from "../data/logements.json";
import { Link } from "react-router-dom";

function Add() {
  return (
    <main className="logement">
      <div className="logement__list">
        {Logements.map(({ id, cover, title }) => (
          <article key={id} className="logement__list__content">
            <Link to={`/logement/${id}`}>
              <div className="logement__list__content__bg"></div>
              <img
                className="logement__list__content__cover"
                src={cover}
                alt={`Logement ${title}`}
              />
              <p className="logement__list__content__name">{title}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Add;
