import { Link } from 'react-router-dom';

function Footer() {

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to PANEL & INK!');
    e.target.reset();
  };

  return (
    <footer className="main-footer">

      <div className="container">

        <div className="footer-top">

          <div className="row g-5">

            <div className="col-lg-4 col-md-6">

              <Link to="/" className="footer-logo">
                <i className="bi bi-book-half"></i>
                PANEL <span>& INK</span>
              </Link>

              <p className="footer-description">
                A world of stories, imagination and adventure.
                Discover your next favourite comic with PANEL & INK.
              </p>

              <div className="footer-socials">

                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
                </a>

              </div>

            </div>


            <div className="col-lg-2 col-md-6">

              <h5>Quick Links</h5>

              <ul className="footer-links">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>

              </ul>

            </div>


            <div className="col-lg-2 col-md-6">

              <h5>Media Center</h5>

              <ul className="footer-links">

                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/products">New Arrivals</Link></li>
                <li><Link to="/categories">Collections</Link></li>
                <li><Link to="/contact">Reader Support</Link></li>
                <li><Link to="/contact">Get In Touch</Link></li>

              </ul>

            </div>


            <div className="col-lg-4 col-md-6">

              <h5>Join Our Comic Club</h5>

              <p className="newsletter-text">
                Subscribe for new collections, exciting updates
                and special offers.
              </p>

              <form className="newsletter-form" onSubmit={handleSubscribe}>

                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />

                <button type="submit" aria-label="Subscribe">
                  <i className="bi bi-arrow-right"></i>
                </button>

              </form>

              <small className="newsletter-note">
                Join our community of comic lovers.
              </small>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 PANEL & INK. All Rights Reserved.
          </p>

          <p>
            Made for the love of stories.
            <i className="bi bi-heart-fill"></i>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;