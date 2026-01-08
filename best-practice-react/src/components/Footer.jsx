import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">MyApp</h5>
            <p className="small">
              A modern React application built with using Bootstrap.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📧 support@myapp.com</p>
            <p className="small mb-0">📍 India</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
