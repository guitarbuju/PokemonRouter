import styles from "./about.module.css";
import Pokes from "../../stuff";

const About = () => {
  
 const newPoke = Pokes.slice(1)
 console.log(newPoke)
   const randomNumber = Math.floor(Math.random() * newPoke.length);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>ABOUT POKEMON</h3>
        <p className={styles.parra}>
          Pokémon is a media franchise consisting of video games, serialized
          cartoons and films, trading cards, countless pieces of merchandise,
          and various other products. The franchise takes place in a shared
          universe in which humans co-exist with creatures called Pokémon, a
          large variety of species endowed with special powers. The
          franchise&apos;s target audience is boys and girls from 5 to 12,[1]
          but it is known to attract people of all ages.
        </p>
      </div>

      <div className={styles.imgwrapper}>
        <h4>HELLO IM {Pokes[randomNumber].name.toUpperCase()}</h4>
        <img className={styles.img} src={Pokes[randomNumber].url} />
      </div>
    </div>
  );
};

export default About;
