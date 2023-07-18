import { arrayObj } from "../../stuff";
import styles from "./pokemon3.module.css";
import Card from "../../Components/Card/Card";
import { useState } from "react";

const Pokemon3 = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);

  const [selected, setSelected] = useState(false);
  const [poke, setPoke] = useState(null);

  return (
    <div className={styles.container}>
    {!poke &&  <h3 className={styles.title}>CHOOSE YOUR POKEMON</h3>}
     
      <ul className={styles.btnlist}>
        {!selected &&
          newPoke.map((e, index) => (
            <li
              onClick={() => {
                setPoke(index);
                setSelected(true);
              }}
              key={index}
            >
              <Card  name={e.name.toUpperCase()} url={e.url} />
            </li>
          ))}
      </ul>

      {poke !== null && (
        <div className={styles.wrapper}>
          <img className={styles.daimage} src={newPoke[poke].url} />
          <div  className={styles.title2}>
            <h4 className={styles.title}>{newPoke[poke].name.toUpperCase()}</h4>
            <p style={{width:'600px'}}>{newPoke[poke].description}</p>
            <button  onClick={()=>{setSelected(false);setPoke(null)}} className="btn btn-danger">Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon3;
