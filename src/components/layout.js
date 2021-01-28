import React from "react"
import { Link } from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isMainPath = location.pathname === rootPath || location.pathname.match(/archive/)
  let header
  let footer = (
    <h3 className="main-footer">
      <Link to="/">Home</Link>
    </h3>
  )
  if (isMainPath != null){
    // header = (
    //   <StyledBackgroundSection title={title} className="global-header"/>
    // )
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
    return (
      <div className="content-wrapper" data-is-root-path={isMainPath}>
        {/* <header className="global-header main-image">{header}</header> */}

        <div className="global-wrapper">
        <header className="global-header" data-is-root-path={isMainPath}>{header}</header>
          <Search indices={searchIndices} />
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
          <header className="global-header" data-is-root-path={isMainPath}>{header}</header>
          <main>{children}</main>
          <footer>{footer}</footer>
        </div>
    )
  }
}

export default Layout
