import Header from "./header/Header";
import styles from './App.module.css';
import './reset.css';
import Banner from "./banner/Banner";
import Menu from "./menu/Menu";

const App = () => (
  <div className={styles.app}>
    <Header />
    <Banner />
    <Menu />
  </div>
);

export default App;
