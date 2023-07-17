import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from './mainlayout.module.css'

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
