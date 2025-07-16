import React from "react";
import "./footer.css";
import FooterNavItem from "./FooterNavItem";

// Assuming FooterNavItem and usefullLinks are imported or defined above
// import FooterNavItem from './FooterNavItem';
// import { usefullLinks } from './footerLinksData';

function Footer() {
  const usefullLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of Service",
    "Privacy Policy",
  ];
  const locations = ["USA", "Australia", "Canada", "New Zealand", "Thailand"];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            {/* Footer Info Section */}
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Cinema is a movie theater chain that offers a unique and
                immersive cinematic experience. With cutting-edge technology,
                luxurious seating, and a wide selection of movies, we create
                unforgettable moments for every movie lover.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefullLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            {/* Cinemas Section */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {usefullLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-12 footer-content text-center text-md-start text-white">
              <h4>Contact Us</h4>
              <p>
                123 Movie Street
                <br />
                Sydney, NSW 2000
                <br />
                Australia
                <br />
                <br />
                <strong>Phone:</strong> +61 234 567 890
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@cinema.com">info@cinema.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>Cinema</strong>. All Rights
          Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Sanaya Samadhi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
