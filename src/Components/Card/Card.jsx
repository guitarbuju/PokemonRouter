
import styles from './card.module.css'

const Card = ({ name, url }) => {
  return (
    <div  className={styles.imgroup}>
      <h6 className={styles.title}>{name}</h6>
      <img className={styles.daimg} src={url} />
    </div>
  );
};

export default Card;
