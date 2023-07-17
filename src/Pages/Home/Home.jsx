import styles from "./home.module.css";
import {arrayObj }from "../../stuff";

const Home = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);
  const randomNumber = Math.floor(Math.random() * newPoke.length);

  return (
    <div className={styles.img}>
      <img style={{ width: "300px" }} src={newPoke[randomNumber].url} />
      <img style={{ width: "500px" }}  src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/70/latest/20190529140416/Logo_de_Pok%C3%A9mon_HOME.png/800px-Logo_de_Pok%C3%A9mon_HOME.png" />
      
    </div>
  );
};

export default Home;
