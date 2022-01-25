import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Weather from "./weather"
import hamburger from "../images/hamburger-menu.svg"

function Header() {
  const [openMobileMenu, SetOpenMobileMenu] = useState(false)

  function clickMobileMenu() {
    SetOpenMobileMenu(!openMobileMenu)
    console.log(openMobileMenu)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h2 className="logo">WILLIAMS</h2>
        </Link>

        <div className="mobile-menu">
          <Link to="#contact" className="nav-link">
            GET IN TOUCH
          </Link>
        </div>

        <div className="header-menu">
          <Weather />
          <ul
            style={{
              display: `flex`,
              listStyle: `none`,
            }}
          >
            <li className="nav-list">
              <Link to="#about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-list">
              <Link to="#projects" className="nav-link">
                PROJECTS
              </Link>
            </li>
            <li className="nav-list">
              <Link to="#contact" className="nav-link">
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
