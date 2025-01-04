import Header from "./header/Header";
import styles from './App.module.css';
import './reset.css';
import Banner from "./banner/Banner";
import Menu from "./menu/Menu";
import ProductList from "./product/ProductCard";

const App = () => (
  <div className={styles.app}>
    <Header />
    <Banner />
    <Menu />
    <ProductList />
  </div>
);

export default App;
