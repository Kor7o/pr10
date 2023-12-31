import arrowDown from "../assets/arrowDown.svg";
import "../components/Collapse.css";

const Collapse = ({ categorie, title, content }) => {
  const stateClick = (e) => {
    if (!e.target.parentNode.nextSibling.classList.contains("show")) {
      e.target.parentNode.nextSibling.classList.add("show"); // nextSibling = card__info
      e.target.classList.add("rotate"); // lastChild = icon
    } else {
      e.target.parentNode.nextSibling.classList.remove("show");
      e.target.classList.remove("rotate");
    }
  };

  return (
    <div className={`${categorie}__informations__card`}>
      <div className={`${categorie}__informations__card__title`}>
        <span>{title}</span>
        <img src={arrowDown} alt="Dérouler le menu" onClick={stateClick} />
      </div>

      {Array.isArray(content) ? ( // Si c'est un objet = équipement
        <>
          <ul className={`${categorie}__informations__card__info`}>
            {content.map((equipment, index) => (
              <li
                key={index}
                className={`${categorie}__informations__card__equipment`}
              >
                {equipment}
              </li>
            ))}
          </ul>
        </>
      ) : (
        // le reste
        <>
          <p className={`${categorie}__informations__card__info`}>{content}</p>
        </>
      )}
    </div>
  );
};

export default Collapse;
