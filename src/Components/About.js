import "../CSS/About.css";
import React from "react";

function About({ data }) {
  // const websites = data?.freelance.map(function (website) {
  //   let image = `Images/about/${website.image}`;

  //   return (
  //     <a href={website.website} target="_blank" rel="noopener noreferrer">
  //       <button className="about__button" title={website.title}>
  //         <img src={image} alt="" />
  //       </button>
  //     </a>
  //   );
  // });

  return (
    <section className="about" id="about">
      <div className="about__content row">
        <div className="about__profilePicContainer three column">
          <img
            className="about__profilePic"
            src={`Images/${data?.image}`}
            alt=""
          />
        </div>
        <div className="about__contact nine column">
          <h2>About Me</h2>
          <p>
            I am a Full Stack Developer predominantly in ReactJS. I am currently
            studying online at Bethel School of Technology while also
            freelancing. I have a passion for design so I have been self
            teaching UI/UX Design on the side.{" "}
          </p>
          <div className="about__contacts row">
            <div className="about__contactDetails column">
              <h2>Contact Details</h2>
              <p className="address">
                <span>James Troughton</span>
                <br />
                <span>Auckland, New Zealand, 0620</span>
                <br />
                <span>+61 21 681 998</span>
                <br/>
                <span>
                  <a href="mailto:jamesstroughton@gmail.com">jamesstroughton@gmail.com</a>
                </span>
              </p>
            </div>
            {/* <div className="about__contactFreelance column">{websites}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
