import { arrayObj } from "../../stuff";
import styles from "./pokemon.module.css";

const Pokemon = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);
  const randomNumber = Math.floor(Math.random() * newPoke.length);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{newPoke[randomNumber].name.toUpperCase()}</h3>
        <p>{newPoke[randomNumber].description}</p>
      </div>

      <img style={{ width: "300px" }} src={newPoke[randomNumber].url} />
    </div>
  );
};

export default Pokemon;
