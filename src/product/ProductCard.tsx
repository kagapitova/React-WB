import React from 'react';
import ProductPhotos from './ProductPhotos';
import productData from '../../public/items.json';
import styles from './ProductCard.module.css';

export type Product = {
  title: string;
  description: string;
  sale: number;
  price: number;
  currency: string;
  rate: number;
  favorite: number;
  cardType: number;
  category: string;
  src: string;
};

export type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <ProductPhotos product={product} />
      <div className={styles.productCardInfo}>
        <div className={styles.productCardDetails}>
          <div className={styles.productCardControlMob}>
              <h3 className={styles.price}>{product.price}</h3>
              <div className={styles.stat}>
                  <p>{product.rate}<img src="public/assets/png/star.png" alt="fav" /></p>
                  <p>{product.favorite}<img src="public/assets/png/like.png" alt="fav" /></p>
              </div>
          </div>
          <div className={styles.header}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.fav}>
                <img src="public/assets/png/fav.png" alt="fav" />
              </div>
          </div>
          <p className={styles.description}>Три в одном! Человеческая рука будет массажером, постоянным спутником<br/>и домашним питомцем. Вещь — это отрубленная кисть правой руки, способная свободно передвигаться по дому и за его пределами на кончиках пальцев, как паук.",</p>
        </div>
        <div className={styles.productCardControl}>
          <div className={styles.productInfo}>
              <h3 className={styles.price}>{product.price}</h3>
              <div className={styles.stat}>
                  <p>{product.rate}<img src="public/assets/png/star.png" alt="fav" /></p>
                  <p>{product.favorite}<img src="public/assets/png/like.png" alt="fav" /></p>
              </div>
          </div>
          <p className={styles.cartBtn}>В корзину</p>
        </div>
        <div className={styles.productCardControlMob}>
          <p className={styles.cartBtn}>В корзину</p>
          <img src="public/assets/icons/favMob.svg" alt="fav" />
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className={styles.productList}>
      {productData.products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
