import { Link } from 'react-router-dom';
import getImage from './getImage';

function About() {

  return (
    <>

      <section className="page-banner">
        <div className="container">
          <span>OUR STORY</span>
          <h1>Behind Every Story</h1>
          <p>Home / About Us</p>
        </div>
      </section>


      <section className="section-padding about-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6" data-aos="fade-right">

              <div className="about-image-wrap">

                {getImage('comic-store.jpg') ? (
                  <img
                    src={getImage('comic-store.jpg')}
                    alt="Comic book store"
                  />
                ) : (
                  <div className="image-placeholder">
                    <i className="bi bi-shop"></i>
                  </div>
                )}

                <div className="about-image-badge">
                  <strong>100%</strong>
                  <span>Comic Love</span>
                </div>

              </div>

            </div>


            <div className="col-lg-6" data-aos="fade-left">

              <span className="small-label">WELCOME TO PANEL & INK</span>

              <h2 className="about-heading">
                A Little World Built
                <span> For Big Imaginations.</span>
              </h2>

              <p>
                PANEL & INK is a comic book store concept created
                for readers, collectors and adventure lovers.
                We believe every comic book has a unique story
                waiting to be discovered.
              </p>

              <p>
                From exciting superhero adventures to beautiful
                manga collections, our goal is to bring different
                worlds and creative stories together in one place.
              </p>

              <div className="about-points">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Carefully selected collections
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Stories for every reader
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  A community for comic lovers
                </div>

              </div>

              <Link to="/products" className="primary-btn mt-4">
                Discover Our Comics
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      <section className="about-values section-padding">

        <div className="container">

          <div className="section-heading">
            <span>WHAT MAKES US SPECIAL</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="value-card" data-aos="fade-up">
                <i className="bi bi-book-half"></i>
                <h4>Love For Stories</h4>
                <p>
                  We celebrate imagination, creativity and storytelling.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card" data-aos="fade-up">
                <i className="bi bi-people"></i>
                <h4>Our Community</h4>
                <p>
                  We bring readers and collectors together.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card" data-aos="fade-up">
                <i className="bi bi-stars"></i>
                <h4>Creative Discovery</h4>
                <p>
                  We encourage everyone to discover new adventures.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="about-reading-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="small-label">READ. IMAGINE. REPEAT.</span>

              <h2>Every Reader Belongs Here.</h2>

              <p>
                Your next favourite character, story or adventure
                could be waiting inside the pages of a comic.
                Come explore with us.
              </p>

              <Link to="/contact" className="primary-btn">
                Get In Touch
              </Link>

            </div>

            <div className="col-lg-6">

              {getImage('comic-reading.jpg') ? (
                <img
                  src={getImage('comic-reading.jpg')}
                  alt="Reading comic books"
                  className="reading-image"
                />
              ) : (
                <div className="image-placeholder reading-image">
                  <i className="bi bi-book"></i>
                </div>
              )}

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;