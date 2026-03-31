import React from "react";
import "./ExabyteClone.css";

function ExabyteClone() {
  return (
    <div className="app">

      

      {/* HERO */}
      <section className="hero">
            <div className="container hero-grid">
              <div>
                <h1>Malaysia’s #1 Spare Parts Provider</h1>
                <p>
                  Find reliable, affordable, and certified spare parts for every vehicle. 
                  Get back on the road quickly with our top-quality products and expert support.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">View Parts</button>
                </div>
              </div>

              <img
                src="./Sp.png"
                alt="hero"
                className="hero-img"
              />
            </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="trust py-5 bg-light">
        <div className="container text-center">
          <h4 className="mb-4">Trusted by 160,000+ Car Owners</h4>
          <div className="trust-logos d-flex flex-wrap justify-content-center align-items-center gap-4">
            {/* Replace with actual logos if available */}
            <img src="./ferrari.png" alt="Brand 1" className="trust-logo" />
            <img src="./lambo.jpg" alt="Brand 2" className="trust-logo" />
            <img src="./merc.jpg" alt="Brand 3" className="trust-logo" />
            <img src="./bmw.png" alt="Brand 4" className="trust-logo" />
            <img src="./audi.png" alt="Brand 5" className="trust-logo" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features container my-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-card shadow-sm p-4 text-center">
            <div className="feature-icon mb-3">⚡</div>
            <h3 className="mb-2">Fast Delivery</h3>
            <p>Get your car spare parts quickly and reliably, so your vehicle is back on the road in no time.</p>
          </div>

          <div className="feature-card shadow-sm p-4 text-center">
            <div className="feature-icon mb-3">🔧</div>
            <h3 className="mb-2">High Quality</h3>
            <p>All parts are tested and certified for durability and safety, giving you peace of mind.</p>
          </div>

          <div className="feature-card shadow-sm p-4 text-center">
            <div className="feature-icon mb-3">💬</div>
            <h3 className="mb-2">24/7 Support</h3>
            <p>Our team is ready to assist you anytime to find the right part for your vehicle.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Affordable Spare Parts Plans</h2>

            <div className="pricing-grid">
              {/* Starter Plan */}
              <div className="price-card shadow-sm">
                <div className="price-header">
                  <h3>Starter</h3>
                  <p className="price">$50 / part</p>
                </div>
                <ul className="features-list">
                  <li>Basic spare parts selection</li>
                  <li>Fast shipping</li>
                  <li>Reliable warranty</li>
                </ul>
                <button className="btn-primary">Buy Now</button>
              </div>

              {/* Featured Plan */}
              <div className="price-card featured shadow-lg">
                <div className="price-header">
                  <h3>Pro</h3>
                  <p className="price">$100 / part</p>
                </div>
                <ul className="features-list">
                  <li>Extended spare parts selection</li>
                  <li>Express shipping</li>
                  <li>Priority customer support</li>
                </ul>
                <button className="btn-primary">Buy Now</button>
              </div>

              {/* Business Plan */}
              <div className="price-card shadow-sm">
                <div className="price-header">
                  <h3>Business</h3>
                  <p className="price">$150 / part</p>
                </div>
                <ul className="features-list">
                  <li>All spare parts</li>
                  <li>Next-day delivery</li>
                  <li>Dedicated support</li>
                </ul>
                <button className="btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>

      {/* CTA */}
    <section className="cta py-5 text-white">
        <div className="cta-overlay">
          <div className="container text-center py-5">
            <h2 className="cta-title mb-4">
              Get Quality Car Spare Parts Delivered Fast
            </h2>
            <p className="cta-subtitle mb-4">
              Reliable, affordable, and certified parts for every vehicle. Shop now and get back on the road quickly!
            </p>
            <button className="btn-cta btn-lg">Shop Now</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Products</h4>
            <p>Web Hosting</p>
            <p>Domains</p>
            <p>Cloud</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Contact</p>
            <p>Support</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>

        <p className="copyright">© 2026 Exabytes Clone</p>
      </footer> */}

    </div>
  );
}

export default ExabyteClone;