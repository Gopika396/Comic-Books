import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="app-wrapper">

      <Navbar cartCount={cartCount} />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;