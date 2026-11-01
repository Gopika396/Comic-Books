import { Link } from 'react-router-dom';
import getImage from './getImage';

function Categories() {

  const categories = [
    {
      name: 'Superhero Comics',
      description: 'Meet legendary heroes and discover exciting battles.',
      image: getImage('superhero-category.jpg'),
      count: '120+ Stories',
      color: 'category-peach'
    },
    {
      name: 'Manga Collection',
      description: 'Explore amazing Japanese manga and unforgettable characters.',
      image: getImage('manga-category.jpg'),
      count: '150+ Stories',
      color: 'category-purple'
    },
    {
      name: 'Fantasy Worlds',
      description: 'Enter magical kingdoms filled with dragons and mysteries.',
      image: getImage('fantasy-category.jpg'),
      count: '90+ Stories',
      color: 'category-yellow'
    },
    {
      name: 'Indie Comics',
      description: 'Discover creative stories from independent creators.',
      image: getImage('indie-category.jpg'),
      count: '80+ Stories',
      color: 'category-blue'
    }
  ];

  return (
    <>

      <section className="page-banner">
        <div className="container">
          <span>EXPLORE YOUR INTERESTS</span>
          <h1>Comic Categories</h1>
          <p>Home / Categories</p>
        </div>
      </section>


      <section className="section-padding">

        <div className="container">

          <div className="section-heading">
            <span>DISCOVER YOUR GENRE</span>
            <h2>Explore Different Worlds</h2>
            <p>
              Whether you love action, adventure, fantasy or manga,
              there is always a new story waiting for you.
            </p>
          </div>

          <div className="row g-4">

            {categories.map((item, index) => (

              <div className="col-lg-6" key={item.name}>

                <div
                  className={`category-card ${item.color}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  <div className="category-image">

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      <div className="image-placeholder">
                        <i className="bi bi-book"></i>
                      </div>
                    )}

                  </div>

                  <div className="category-content">

                    <span>{item.count}</span>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <Link to="/products" className="category-link">
                      Explore Collection
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="genre-strip">

        <div className="container">

          <h2>One Store. Endless Adventures.</h2>

          <p>
            Find stories that match your imagination.
          </p>

          <Link to="/products" className="primary-btn">
            Shop All Comics
            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>

      </section>

    </>
  );
}

export default Categories;