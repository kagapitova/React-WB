import React from 'react';
import { Product } from './ProductCard';
import styles from './ProductPhotos.module.css';

type ProductPhotosProps = {
  product: Product;
};

const ProductPhotos: React.FC<ProductPhotosProps> = ({ product }) => {
  const { cardType, src } = product;

  if (!src) {
    return (
      <div className={styles.productPhotosDefault}>
        <p>No image available</p>
      </div>
    );
  }

  const renderImages = () => {
    const count = cardType || 1;

    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className={`${styles[`container--${cardType}`]}`}
      >
        <img
          src={src}
          alt={`Product ${index + 1}`}
          className={styles.productPhotoImage}
        />
      </div>
    ));
  };

  return (
    <div className={styles.productPhotos}>
      <img className={styles.sale} src="public/assets/png/sale.png" alt="sale" />
      <img className={styles.sale1} src="public/assets/png/sale2.png" alt="sale" />
      {renderImages()}
    </div>
  );
};

export default ProductPhotos;
