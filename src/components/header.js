import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import "./header.module.scss"
import headerStyles from "./header.module.scss"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      {/* <div className={headerStyles.box} /> */}
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.headerList}>
          <li>
            <Link
              to="/"
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
