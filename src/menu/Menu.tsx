import categoriesData from "../../public/categories.json";
import styles from "./Menu.module.css";

interface Category {
  url: string;
  title: string;
  src: string;
}

const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu_list}>
        {categoriesData.categories.map((category: Category, index) => (
          <li key={index} className={styles.menu_item}>
            <a href={category.url} className={styles.item_link}>
              <img src={category.src} alt={category.title} className={styles.item_png} />
              <span className={styles.item_title}>{category.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

