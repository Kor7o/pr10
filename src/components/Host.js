import "../components/Host.css";

const Host = ({ host }) => {
  return (
    <div className="product__content__right__host">
      <div className="product__content__right__host__name">
        <p className="product__content__right__host__name__firstname">
          {host.name}
        </p>
      </div>

      <img
        src={host.picture}
        alt=""
        className="product__content__right__host__picture"
      />
    </div>
  );
};

export default Host;
