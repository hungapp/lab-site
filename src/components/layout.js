/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/layout.css"
import "typeface-lato"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer
      style={{ backgroundColor: "#0d0a23", color: "white", padding: "5px" }}
    >
      <p>360 Huntington Ave., Boston, Massachusetts 02115 | 617.373.2000</p>
      <p>© {new Date().getFullYear()} Northeastern University</p>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
