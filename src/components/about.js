import * as React from "react"
import face from "../images/darren.jpg"
import { Link } from "gatsby"

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="photo">
        <img
          style={{
            width: `250px`,
            height: `250px`,
            borderRadius: `100%`,
            zIndex: 100,
          }}
          src={face}
        />
        <div className="circle"></div>
        <div className="circle-2"></div>
      </div>
      <div
        style={{
          display: `flex`,
          alignItems: `start`,
          flexDirection: `column`,
          justifyContent: `center`,
        }}
      >
        <h4 style={{ margin: `5px 0` }}>
          Hi, my name is{" "}
          <strong
            style={{
              textTransform: `uppercase`,
              letterSpacing: `-1px`,
              fontSize: `1em`,
            }}
          >
            Darren Williams
          </strong>
          .
        </h4>
        <h5
          style={{
            fontSize: `1.2em`,
            margin: `10px 0`,
            textTransform: `uppercase`,
            letterSpacing: `1px`,
          }}
        >
          Designer turned Developer
        </h5>
        <p
          style={{ fontSize: `16px`, letterSpacing: `1px`, lineHeight: `2em` }}
        >
          Australian born developer with a passion for React. After completing
          my diploma in web development in 2019, developing has been a driving
          force in where i am today. After 10+ years as a graphic designer, i
          now find myself with more drive than ever to improve my skill set as a
          developer. Driven by continuous learning and a hunger to solve
          problems creatively, I am always looking for new challenges. This has
          led me to gain experience in web development across a broad range of
          areas - including front-end engineering, back end programming and
          everything in between.
        </p>
      </div>
    </div>
  </section>
)

export default About
