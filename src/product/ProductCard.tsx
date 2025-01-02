import React from 'react';
import ProductPhotos from './ProductPhotos';
import productData from '../../public/items.json';

type Product = {
  title: string;
  description: string;
  sale: number;
  price: number;
  currency: string;
  rate: number;
  favorite: number;
  cardType: number;
  category: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <ProductPhotos product={product} />
      <div className="product-card__details">
        <div>
            <h3>{product.title}</h3>
            <div></div>
        </div>
        <p>{product.description}</p>
      </div>
      <div className="product-card__control">
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
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {productData.products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
