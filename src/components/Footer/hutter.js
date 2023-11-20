import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h1>
                <strong>Abh</strong>yaz
              </h1>
              <p>
                Our Talent Management Platform is designed for organizations &
                individuals. Organizations can operate remote internships &
                manage training programs on this platform. Similarly,
                individuals can enhance their talent by participating in our
                remote internships & returnships.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <ul>
                <li className="nav-item">About us</li>
                <li className="nav-item">Features</li>
                <li className="nav-item">News</li>
                <li className="nav-item">FAQ</li>
                <li className="nav-item">Services</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3 contact">
              <ul>
                <h5>Contact us</h5>
                <li>
                  <i className="fa-solid fa-phone-volume"></i> 010-223344
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i> abhyaz@elearn.edu.in
                </li>
                <li>
                  <i className="fa-solid fa-paper-plane"></i> Mumbai,
                  Maharastra, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
