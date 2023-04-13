import React from "react";
import './footer.css';

export default function Footer() {
  return (
    <div className="d-flex flex-column mt-5 mb-0 " style={{ height: "45vh" }}>
      <footer className="bg-dark text-center text-white mt-auto">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-facebook-f"></i></span>

            {/* <!-- Twitter --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-twitter"></i></span>

            {/* <!-- Google --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-google"></i></span>

            {/* <!-- Instagram --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-instagram"></i></span>

            {/* <!-- Linkedin --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-linkedin-in"></i></span>

            {/* <!-- Github --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-github"></i></span>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 footext">
          © 2022 Copyright:
          <span className="text-white" > ArtSellingPal.com </span>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );

}