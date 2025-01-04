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
          <div>
              <h3 className={styles.title}>{product.title}</h3>
              <div></div>
          </div>
          <p className={styles.description}>Три в одном! Человеческая рука будет массажером, постоянным спутником<br/>и домашним питомцем. Вещь — это отрубленная кисть правой руки, способная свободно передвигаться по дому и за его пределами на кончиках пальцев, как паук.",</p>
        </div>
        <div className={styles.productCardControl}>
          <div>
              <h3>{product.price}</h3>
              <div>
                  <p>{product.rate}</p>
                  <p>{product.favorite}</p>
              </div>
          </div>
          <p>"В корзину"</p>
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
