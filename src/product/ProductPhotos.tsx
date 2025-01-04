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
      <img
        key={index}
        src={src}
        alt={`Product ${index + 1}`}
        className={`${styles.productPhotoImage} ${styles[`productPhotoImage--${cardType}`]}`}
      />
    ));
  };

  return (
    <div className={`${styles.productPhotos} ${styles[`productPhotos--${cardType}`]}`}>
      {renderImages()}
    </div>
  );
};

export default ProductPhotos;
