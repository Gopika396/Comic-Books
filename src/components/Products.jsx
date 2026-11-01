import { useState } from 'react';
import ProductCard from './ProductCard';
import products from './ProductData';

function Products({ addToCart, favorites, toggleFavorite }) {

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');

  const categories = [
    'All',
    'Superhero',
    'Manga',
    'Fantasy',
    'Mystery',
    'Sci-Fi'
  ];

  let filteredProducts = products.filter(product => {

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>

      <section className="page-banner">
        <div className="container">
          <span>THE COMIC COLLECTION</span>
          <h1>Find Your Next Favourite</h1>
          <p>
            Home / Products
          </p>
        </div>
      </section>


      <section className="section-padding products-page">

        <div className="container">

          <div className="products-topbar">

            <div>
              <span className="small-label">OUR COLLECTION</span>
              <h2>Explore All Comics</h2>
              <p>Discover amazing stories from every genre.</p>
            </div>

            <div className="products-count">
              {filteredProducts.length} Products Found
            </div>

          </div>


          {/* SEARCH AND FILTER */}

          <div className="filter-panel">

            <div className="search-box">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search comic books..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

          </div>


          {/* CATEGORY FILTER */}

          <div className="filter-buttons">

            {categories.map(item => (

              <button
                key={item}
                className={category === item ? 'filter-active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>


          {/* PRODUCTS */}

          <div className="row g-4 mt-2">

            {filteredProducts.length > 0 ? (

              filteredProducts.map(product => (

                <div className="col-lg-3 col-md-6" key={product.id}>

                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />

                </div>

              ))

            ) : (

              <div className="col-12 text-center no-products">
                <i className="bi bi-search"></i>
                <h3>No Comics Found</h3>
                <p>Try another search or category.</p>

                <button
                  className="primary-btn"
                  onClick={() => {
                    setSearch('');
                    setCategory('All');
                  }}
                >
                  Clear Filters
                </button>
              </div>

            )}

          </div>

        </div>

      </section>

    </>
  );
}

export default Products;