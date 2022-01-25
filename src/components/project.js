import React, { useState } from "react"

const Project = props => {
  return (
    <div className="project-contianer">
      <img src={props.mainImage} />
      <div className="project-info">
        <a href={props.link}>
          <h5>{props.title}</h5>
        </a>
        <div>
          <img style={{ width: `40px` }} src={props.software} />
          {props.software2 ? (
            <img style={{ width: `40px` }} src={props.software2} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Project
