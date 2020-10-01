import "../CSS/Portfolio.css";
import React from "react";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import CodeIcon from "@material-ui/icons/Code";

function Portfolio({ data }) {
  let projects = data?.projects.map(function (projects) {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={projects.title} className="columns portfolio__item">
        <div className="portfolio__itemWrap">
          <a
            href={projects.url}
            target="_blank"
            title={projects.title}
            rel="noopener noreferrer"
          >
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio__itemMeta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <a href={projects.url} target="_blank" rel="noopener noreferrer">
              <div className="link-icon">
                <OpenInBrowserIcon />
              </div>
            </a>
            <a href={projects.code} target="_blank" rel="noopener noreferrer">
              <div className="code-icon">
                <CodeIcon />
              </div>
            </a>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="portfolio" id="portfolio">
      <div className="row">
        <div className="twelve columns">
          <h1>
            <strong>Projects</strong>
          </h1>

          <div id="portfolio__wrapper" className="">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
