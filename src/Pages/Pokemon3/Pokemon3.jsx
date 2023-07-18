import { arrayObj } from "../../stuff";
import styles from "./pokemon3.module.css";
import Card from "../../Components/Card/Card";

const Pokemon = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);



  return (
    <div className={styles.container}>
    <h3 className={styles.title}>CHOOSE YOUR POKEMON</h3>
    <ul className={styles.btnlist}>
          {newPoke.map((e, index) => (
            <li key={index}>
             <Card name={e.name} url={e.url}/>
            </li>
          ))}
        </ul>
     
    </div>
  );
};

export default Pokemon;
