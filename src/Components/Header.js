import "../CSS/Header.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <header className="header" id="home">
      <div className="header__nav" id="nav_links">
        <ul id="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </div>

      <div className="header__banner row">
        <div className="header__bannerText">
          <h1 className="header--responsiveHeadline">James Troughton</h1>
          <p>
            Hello, I'm an Auckland based <span>Front-End Web Developer</span>.
            <br />I design and create experiences that make people's lives
            simpler.
          </p>
          <hr />
          <ul className="header__socialIcons">
            <a
              href="https://www.facebook.com/jamesindeed"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Facebook page!"
            >
              <li>
                <FacebookIcon className="header__socialIcon" />
              </li>
            </a>
            <a
              href="https://github.com/jamesindeed"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub page!"
            >
              <li>
                <GitHubIcon className="header__socialIcon" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/james-troughton-58403a19a/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn page!"
            >
              <li>
                <LinkedInIcon className="header__socialIcon" />
              </li>
            </a>
          </ul>
        </div>
      </div>

      <a className="smoothscroll header__goDown" href="#about">
        <KeyboardArrowDownIcon />
      </a>
    </header>
  );
}

export default Header;
