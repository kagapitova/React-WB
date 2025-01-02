const ProductPhotos = ({ product }) => {
  const { cardType, image } = product;

  if (!image) {
    return (
      <div className="product-photos product-photos--default">
        <p>No image available</p>
      </div>
    );
  }

  const renderImages = () => {
    const count = parseInt(cardType, 10) || 1;

    return Array.from({ length: count }, (_, index) => (
      <img
        key={index}
        src={image}
        alt={`Product ${index + 1}`}
        className="product-photo__image"
      />
    ));
  };

  return <div className={`product-photos product-photos--${cardType}`}>{renderImages()}</div>;
};

export default ProductPhotos;
