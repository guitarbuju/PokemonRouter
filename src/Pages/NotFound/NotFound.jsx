import Pokes from "../../stuff";
import styles from "../About/about.module.css";



const NotFound = () => {
  const newPoke = Pokes.slice(1)
  console.log(newPoke)
    const randomNumber = Math.floor(Math.random() * newPoke.length);
     
       return (
         <div style={{marginTop:'4vh'}}>
           <div className={styles.wrapper}>
             <h3 className={styles.title}>NOT FOUND</h3>
            
           </div>
     
           <div className={styles.imgwrapper}>
           
             <img className={styles.img} src={Pokes[randomNumber].url} />
           </div>
         </div>
       );
     };
     
   
  export default NotFound