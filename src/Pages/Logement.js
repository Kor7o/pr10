import Carousel from "../components/Carousel";
import Error from "./Error";
import Logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Infos from "../components/Infos";

function Home() {
  let { id } = useParams();
  const Log = Logements.filter((l) => l.id === id)[0];
  console.log(Log);
  if (Log == null) {
    return <Error />;
  }
  return (
    <>
      <Carousel logement={Log} />
      <Infos logement={Log} />
    </>
  );
}

export default Home;
