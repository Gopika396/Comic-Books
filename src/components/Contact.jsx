import { useState } from 'react';
import getImage from './getImage';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>

      <section className="page-banner">
        <div className="container">
          <span>WE WOULD LOVE TO HEAR FROM YOU</span>
          <h1>Let's Talk Comics!</h1>
          <p>Home / Contact</p>
        </div>
      </section>


      <section className="section-padding contact-section">

        <div className="container">

          <div className="section-heading">
            <span>GET IN TOUCH</span>
            <h2>Have Something To Ask?</h2>
            <p>
              Questions about our collection? Send us a message.
              We would love to hear from you.
            </p>
          </div>


          <div className="row g-5">

            <div className="col-lg-5">

              <div className="contact-info-card">

                <h3>Contact Information</h3>

                <p>
                  We are always happy to help comic lovers
                  discover their next favourite story.
                </p>

                <div className="contact-info-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5>Email Us</h5>
                    <span>hello@panelandink.com</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Call Us</h5>
                    <span>+91 11111 00000</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Visit Us</h5>
                    <span>Comic Street, India</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h5>Opening Hours</h5>
                    <span>Monday - Saturday: 9 AM - 7 PM</span>
                  </div>
                </div>

                <div className="contact-socials">

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

            </div>


            <div className="col-lg-7">

              <div className="contact-form-card">

                <h3>Send Us A Message</h3>

                <p>Fill in the details below and let us know how we can help.</p>

                {submitted && (
                  <div className="success-message">
                    <i className="bi bi-check-circle-fill"></i>
                    Thank you! Your message has been submitted.
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <div className="row g-3">

                    <div className="col-md-6">

                      <label>Your Name</label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="col-md-6">

                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="col-12">

                      <label>Subject</label>

                      <input
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="col-12">

                      <label>Your Message</label>

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>

                    </div>

                    <div className="col-12">

                      <button type="submit" className="primary-btn">
                        Send Message
                        <i className="bi bi-send"></i>
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="contact-banner">

        {getImage('contact-banner.jpg') && (
          <img
            src={getImage('contact-banner.jpg')}
            alt="Comic book collection"
          />
        )}

        <div className="contact-banner-overlay">
          <h2>Let's Make More Stories Together.</h2>
          <p>Your next adventure is just one page away.</p>
        </div>

      </section>

    </>
  );
}

export default Contact;