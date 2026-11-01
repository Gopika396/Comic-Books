function ProductCard({
  product,
  addToCart,
  favorites,
  toggleFavorite
}) {

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-card" data-aos="fade-up">

      <div className="product-image-wrap">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        ) : (
          <div className="image-placeholder">
            <i className="bi bi-book"></i>
          </div>
        )}

        <span className="product-tag">{product.tag}</span>

        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(product.id)}
          aria-label="Toggle favourite"
        >
          <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
        </button>

      </div>

      <div className="product-details">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-rating">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
        </div>

        <div className="product-bottom">

          <div className="product-price">
            <strong>₹{product.price}</strong>
            <del>₹{product.oldPrice}</del>
          </div>

          <button
            className="add-cart-btn"
            onClick={addToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <i className="bi bi-bag-plus"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;