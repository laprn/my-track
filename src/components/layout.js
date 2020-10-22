import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer
  header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )
  
  footer = (
    <h3 className="main-footer">
      <Link to="/">Home</Link>
    </h3>
  )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout
