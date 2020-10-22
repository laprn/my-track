import React from "react"
import { Link } from "gatsby"
import StyledBackgroundSection from "./StyledBackgroundSection.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer = (
    <h3 className="main-footer">
      <Link to="/">Home</Link>
    </h3>
  )
  if (isRootPath){
    header = (
      <StyledBackgroundSection title={title} className="global-header"/>
    )

    return (
      <div className="content-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header main-image">{header}</header>
        <div className="global-wrapper">
          <main>{children}</main>
          <footer>{footer}</footer>
        </div>
      </div>
    )
  }
  else{
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )

    return (        
        <div className="global-wrapper">
          <header className="global-header" data-is-root-path={isRootPath}>{header}</header>
          <main>{children}</main>
          <footer>{footer}</footer>
        </div>
    )
  }
}

export default Layout
