import { arrayObj } from "../../stuff";
import styles from "./pokemon.module.css";
import { useState } from "react";

const Pokemon = () => {
  const newPoke = arrayObj.slice(1);
  console.log(newPoke);

  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = newPoke.length - 1; // The maximum valid index for currentPage is the last index of newPoke array (0-based index).

  const AdvancePage = () => {
    setCurrentPage((thisPage) => {
      const nextPage = thisPage + 1;
      return nextPage <= maxPage ? nextPage : thisPage; // Make sure nextPage is within bounds, otherwise stay on the same page.
    });
  };

  const backPage = () => {
    setCurrentPage((thisPage) => {
      const previousPage = thisPage - 1; // Use a different variable name to avoid conflicts.
      return previousPage >= 0 ? previousPage : thisPage; // Make sure previousPage is within bounds, otherwise stay on the same page.
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          {newPoke[currentPage].name.toUpperCase()}
        </h3>
        <p>{newPoke[currentPage].description}</p>
        <div className="btn-group" >
          <button className="btn btn-danger" onClick={AdvancePage}>Forward</button>
          <button className="btn btn-danger" onClick={backPage}>Backward</button>
        </div>
      </div>
     
      <img style={{ width: "300px" }} src={newPoke[currentPage].url} />
      
    </div>
  );
};

export default Pokemon;
