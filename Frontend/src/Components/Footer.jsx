import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <div className="contact-detail-div">
            <div>
              <div className="single-cta">
               <img src="/chef.png" width={50} height={50}></img>
                <div className="cta-text">
                  <h4>Candidate Applications</h4>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="single-cta">
              <img src="/chef.png" width={50} height={50}></img>
                <div className="cta-text">
                  <h4>Highly Rated Cook</h4>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="single-cta">
              <img src="/chef.png" width={50} height={50}></img>
                <div className="cta-text">
                  <h4>Famous Recipe</h4>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="row">
            <div className=" col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-text">
                  <p>
                    This is a Final Year Project : Team Members  
                    <kbd> Laiba Rafique</kbd>, 
                    <kbd> Sana</kbd>
                 
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <FacebookIcon sx={{ color: "#3b5998", fontSize: "50px" }} />
                  </a>
                  <a href="#">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "50px" }} />
                  </a>
                  <a href="#">
                    <GoogleIcon sx={{ color: "#dd4b39", fontSize: "50px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}, All Right
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul className={"footerul"}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
