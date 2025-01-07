import Header from "./header/Header";
import styles from './App.module.css';
import './reset.css';
import Banner from "./banner/Banner";
import Menu from "./menu/Menu";
import ProductList from "./product/ProductCard";
import Footer from "./Footer/Footer";

const App = () => (
  <div className={styles.app}>
    <Header />
    <Banner />
    <Menu />
    <ProductList />
    <Footer />
  </div>
);

export default App;
