import { useState } from "react";
import "../components/Carousel.css";
import previousIcon from "../assets/arrowLeft.svg";
import nextIcon from "../assets/arrowRight.svg";

function Carousel(props) {
  const logement = props.logement;
  const images = logement.pictures;

  let [id, setId] = useState(0);

  /* S'il n'y a qu'une seule image, on masque les flèches de navigation */
  let classPrevious = "previous";
  let classNext = "next";
  if (images.length === 1) {
    classPrevious += " hidden";
    classNext += " hidden";
  }

  /* fonctions associées aux flèches de navigation du carrousel */
  function next() {
    id === images.length - 1 ? setId(0) : setId(id + 1);
  }
  function previous() {
    id === 0 ? setId(images.length - 1) : setId(id - 1);
  }

  return (
    <main className="Carousel">
      <div className="Carousel__list">
        <article key={logement.id} className="Carousel__list__content">
          <div>
            <div className="Carousel__arrow">
              <img
                className={classPrevious}
                src={previousIcon}
                onClick={previous}
                alt="arrowRight"
              />
              <img
                className={classNext}
                src={nextIcon}
                onClick={next}
                alt="arrowleft"
              />
            </div>
            <div className="Carousel__list__content__bg"></div>
            <img
              className="Carousel__list__content__cover"
              src={images[id]}
              alt={`Logement ${logement.title}`}
            />
            <p className="Carousel__list__content__counter">
              {id + 1}/{images.length}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Carousel;
