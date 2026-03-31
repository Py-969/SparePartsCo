import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: scrolled ? 'rgba(24, 40, 72, 0.95)' : 'transparent',
        transition: 'background-color 0.3s',
        padding: '0.5rem 1rem'
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-5" href="/">
          SparePartsCo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-link-hover" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover" href="/products">Products</a>
            </li>
          </ul>
          <a className="btn btn-outline-light ms-lg-3" href="/signin">Sign In</a>
        </div>
      </div>

      <style>
        {`
          .nav-link-hover {
            transition: color 0.3s, border-bottom 0.3s;
            border-bottom: 2px solid transparent;
          }
          .nav-link-hover:hover {
            color: #f0a500 !important;
            border-bottom: 2px solid #f0a500;
          }
        `}
      </style>
    </nav>
  );
}

export default Header;