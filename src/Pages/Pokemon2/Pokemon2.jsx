import { arrayObj } from "../../stuff";
import styles from "./pokemon2.module.css";
import { useState } from "react";
import classNames from "classnames";

const Pokemon = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);

  const [currentPage, setCurrentPage] = useState(0);

  
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          {newPoke[currentPage].name.toUpperCase()}
        </h3>
        <p>{newPoke[currentPage].description}</p>
        <ul className={classNames(styles.btnlist, "btn-group")}>
          {newPoke.map((e,index) => <li key={index}><button className={classNames(styles.dabuttons,'btn btn-danger')} onClick={()=>setCurrentPage(index)}>{e.name}</button></li>)}
        </ul>
      </div>
     
      <img style={{ width: "300px" }} src={newPoke[currentPage].url} />
      
    </div>
  );
};

export default Pokemon;
