import "../CSS/Footer.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Footer() {
  return (
    <section className="footer">
      <a className="smoothscroll footer__goToTop" href="#home">
        <KeyboardArrowUpIcon />
      </a>

      <div className="footer__content row">
        <div className="twelve columns">
          <ul className="footer__socialIcons">
            <a
              href="https://www.facebook.com/jamesindeed/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Facebook page!"
            >
              <li>
                <FacebookIcon className="footer__socialIcon" />
              </li>
            </a>
            <a
              href="https://github.com/jamesindeed"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub page!"
            >
              <li>
                <GitHubIcon className="footer__socialIcon" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/james-troughton-58403a19a/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn page!"
            >
              <li>
                <LinkedInIcon className="footer__socialIcon" />
              </li>
            </a>
          </ul>

          <ul className="footer__copyright">
            <li>Modified with love by James Troughton ♥️</li>
            <li>
              © All credit goes to Tim Baker - Copyright 2017 Tim BakerDesign by
              Styleshout
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
