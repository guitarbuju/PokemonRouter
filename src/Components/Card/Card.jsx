
import styles from './card.module.css'

const Card = ({ name, url }) => {
  return (
    <div  className={styles.imgroup}>
      <h7 className={styles.title}>{name}</h7>
      <img className={styles.daimg} src={url} />
    </div>
  );
};

export default Card;
