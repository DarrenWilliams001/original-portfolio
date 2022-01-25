import React, { useState } from "react"

const Project = props => {
  return (
    <div className="project-contianer">
      <img src={props.mainImage} />
      <div className="project-info">
        <div className="info">
          <a href={props.link}>
            <h5>{props.title}</h5>
          </a>
          <p>{props.desc}</p>
        </div>

        <div>
          {props.software.map(icon => {
            return (
              <img
                key={icon.id}
                style={{ width: `40px` }}
                src={icon.publicURL}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
