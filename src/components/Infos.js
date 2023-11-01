import "../components/Carousel.css";
import "../components/Collapse.css";
import "../components/Infos.css";
import Rating from "./Rating";
import Collapse from "./Collapse";
import Host from "./Host";

function Infos(props) {
  const logement = props.logement;

  return (
    <main className="Carousel">
      <div className="Carousel__list">
        <article key={logement.id} className="Carousel__list__content">
          <div className="column">
            <div className="column1">
              <p className="logement__list__content__title">{logement.title}</p>
              <p className="logement__list__content__location">
                {logement.location}
              </p>

              <div className="logement__list__content__tags">
                {logement.tags.map((tag) => (
                  <p className="logement__list__content__tag">{tag}</p>
                ))}
              </div>
            </div>

            <div className="column2">
              <Host host={logement.host} />

              <Rating rating={logement.rating} />
            </div>
          </div>
          <div className="logement__list__content__collapses">
            <Collapse
              categorie="logement"
              title="description"
              content={logement.description}
            />
            <Collapse
              categorie="logement"
              title="equipments"
              content={logement.equipments}
            />
          </div>
        </article>
      </div>
    </main>
  );
}

export default Infos;
