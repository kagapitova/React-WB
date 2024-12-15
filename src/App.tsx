import Header from "./header/Header";
import styles from './App.module.css';
import './reset.css';
import Banner from "./banner/Banner";

const App = () => (
  <div className={styles.app}>
    <Header />
    <Banner />
  </div>
);

export default App;
