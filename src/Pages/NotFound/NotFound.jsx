import {arrayObj} from "../../stuff";
import styles from "./notfound.module.css";
import { Link } from "react-router-dom";


const NotFound = () => {
  const newPoke = arrayObj.slice(1)
  console.log(newPoke)
    const randomNumber = Math.floor(Math.random() * newPoke.length);
     
       return (
         <div className={styles.container} style={{marginTop:'8vh'}}>
           <div className={styles.wrapper}>
             <h3 className={styles.title}>NOT FOUND</h3>
            
           </div>
     
           <div className={styles.imgwrapper}>
           
             <img className={styles.img} src={arrayObj[randomNumber].url} />
             <button className= 'btn btn-danger'><Link className={styles.link} to="/" >Home</Link></button>
           </div>
         </div>
       );
     };
     
   
  export default NotFound