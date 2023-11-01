import Add from "../components/Add";
import Banner from "../components/Banner";
import Logements from "../data/logements.json";

function Home() {
  console.table(Logements);
  return (
    <>
      <Banner image="/Hero.png" text="Chez vous, partout et ailleurs" />
      <Add />
    </>
  );
}

export default Home;
