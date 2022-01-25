import React from "react"
import Project from "./project"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query MyQuery {
      projectsJson {
        projects {
          link
          title
          mainImage {
            id
            childImageSharp {
              fluid {
                src
                srcWebp
              }
            }
          }
          software1 {
            id
            publicURL
          }
          description
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
            software={p.software1}
            link={p.link}
            desc={p.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
