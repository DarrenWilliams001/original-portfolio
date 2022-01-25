import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>© Darren Williams {new Date().getFullYear()}</div>
      <div>
        <ul style={{ display: `flex`, listStyle: `none` }}>
          <li>
            <Link
              to="https://www.facebook.com/dazzaw1"
              target={"_blank"}
              className="nav-link"
              rel="noreferrer"
            >
              FACEBOOK
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/dazzawillo17/"
              className="nav-link"
              target={"_blank"}
              rel="noreferrer"
            >
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/darren-williams-699865128/"
              className="nav-link"
              target={"_blank"}
              rel="noreferrer"
            >
              LINKEDIN
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
