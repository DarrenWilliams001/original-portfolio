import React from "react"
import Project from "./project"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query MyQuery {
      projectsJson {
        projects {
          title
          link
          mainImage {
            id
            childImageSharp {
              fluid {
                srcWebp
                src
              }
            }
          }
          software1 {
            id
            publicURL
          }
          software2 {
            id
            publicURL
          }
        }
      }
    }
  `)

  return (
    <section id="projects">
      <div className="projects-heading">
        <h5>Projects</h5>
      </div>
      <div className="projects-grid">
        {projects.projectsJson.projects.map(p => (
          <Project
            title={p.title}
            mainImage={p.mainImage.childImageSharp.fluid.src}
            software={p.software1.publicURL}
            software2={p.software2.publicURL}
            link={p.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
