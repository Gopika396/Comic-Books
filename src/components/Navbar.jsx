import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ cartCount }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="main-navbar">

      <div className="container navbar-inner">

        <NavLink to="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon">
            <i className="bi bi-book-half"></i>
          </span>

          <span>
            PANEL <span className="brand-highlight">&</span> INK
            <small>THE WORLD OF COMICS</small>
          </span>
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>

          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/categories" onClick={closeMenu}>
            Categories
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/products"
            className="nav-cart"
            onClick={closeMenu}
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <i className="bi bi-bag"></i>
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;