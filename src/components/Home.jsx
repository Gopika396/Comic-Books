import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './ProductData';
import getImage from './getImage';

function Home({ addToCart, favorites, toggleFavorite }) {

  const featuredProducts = products.slice(0, 4);

  return (
    <>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center hero-row">

            <div className="col-lg-6" data-aos="fade-right">

              <span className="hero-label">
                <i className="bi bi-stars"></i>
                YOUR NEXT ADVENTURE STARTS HERE
              </span>

              <h1>
                Every Page Has A
                <span> New Adventure.</span>
              </h1>

              <p>
                Discover amazing comic books, legendary heroes,
                magical worlds and stories that stay with you forever.
              </p>

              <div className="hero-buttons">

                <Link to="/products" className="primary-btn">
                  Explore Comics
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/categories" className="outline-btn">
                  Browse Categories
                </Link>

              </div>

              <div className="hero-stats">

                <div>
                  <h3>500+</h3>
                  <span>Comic Stories</span>
                </div>

                <div>
                  <h3>20+</h3>
                  <span>Collections</span>
                </div>

                <div>
                  <h3>4.9</h3>
                  <span>Reader Rating</span>
                </div>

              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-left">

              <div className="hero-image-box">

                {getImage('comic-hero.jpg') ? (
                  <img
                    src={getImage('comic-hero.jpg')}
                    alt="Comic book collection"
                    className="hero-image"
                  />
                ) : (
                  <div className="image-placeholder hero-placeholder">
                    <i className="bi bi-book-half"></i>
                  </div>
                )}

                <div className="hero-floating-card">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <div>
                    <strong>New Adventures</strong>
                    <span>Waiting for you!</span>
                  </div>
                </div>

                <div className="hero-circle"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="benefits-section">

        <div className="container">

          <div className="row g-4">

            <div className="col-md-4">
              <div className="benefit-item">
                <i className="bi bi-box-seam"></i>
                <div>
                  <h5>Careful Packaging</h5>
                  <p>Your comics arrive safely.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="benefit-item">
                <i className="bi bi-book"></i>
                <div>
                  <h5>Quality Collections</h5>
                  <p>Stories worth collecting.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="benefit-item">
                <i className="bi bi-headset"></i>
                <div>
                  <h5>Reader Support</h5>
                  <p>We are here to help.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="section-padding featured-section">

        <div className="container">

          <div className="section-heading" data-aos="fade-up">
            <span>HANDPICKED FOR YOU</span>
            <h2>Featured Comic Collection</h2>
            <p>
              Explore some of our favourite stories and discover
              your next unforgettable read.
            </p>
          </div>

          <div className="row g-4">

            {featuredProducts.map(product => (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            ))}

          </div>

          <div className="text-center mt-5">

            <Link to="/products" className="primary-btn">
              View All Comics
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* COLLECTION BANNER */}

      <section className="collection-banner">

        <div className="container">

          <div className="collection-content" data-aos="zoom-in">

            <span>THE COLLECTOR'S CORNER</span>

            <h2>
              Stories That Deserve
              <br />
              A Place On Your Shelf.
            </h2>

            <p>
              From legendary superheroes to magical fantasy worlds,
              find the perfect addition to your collection.
            </p>

            <Link to="/categories" className="dark-btn">
              Explore Collections
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="section-padding">

        <div className="container">

          <div className="section-heading">
            <span>WHY PANEL & INK?</span>
            <h2>Made For Comic Lovers</h2>
          </div>

          <div className="row g-4">

            {[
              ['bi-book-half', 'Endless Stories', 'Discover stories from different genres and worlds.'],
              ['bi-gift', 'Perfect Gifts', 'Find something special for every comic enthusiast.'],
              ['bi-heart', 'Reader Community', 'A place where every comic fan belongs.']
            ].map((item, index) => (

              <div className="col-md-4" key={index}>

                <div className="why-card" data-aos="fade-up">

                  <div className="why-icon">
                    <i className={`bi ${item[0]}`}></i>
                  </div>

                  <h4>{item[1]}</h4>
                  <p>{item[2]}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;