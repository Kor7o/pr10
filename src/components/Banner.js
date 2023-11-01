import "../components/Banner.css";

function Banner({ image, text }) {
  return (
    <>
      <div className="banner">
        <img src={image} className="banner_img" alt="bannière" />
        <h2 className="banner_text">{text}</h2>
      </div>
    </>
  );
}

export default Banner;
