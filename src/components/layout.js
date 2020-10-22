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
      <StyledBackgroundSection title={title} className="global-header">
        {/* <h1 className="top-heading">
          <Link to="/">{title}</Link>
        </h1> */}
      </StyledBackgroundSection>
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
    
    // header = (
    //     <h1
    //       style={{
    //         ...scale(1.3),
    //         position: 'absolute',
    //         textAlign: 'center',
    //         left: 0,
    //         right: 0,
    //         top: rhythm(4),
    //         marginTop: '0',
    //         height: rhythm(2.5),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    // )
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

  
  // return (
  //   <div className="content-wrapper" data-is-root-path={isRootPath}>
  //     <header className="global-header">{header}</header>
  //     <div className="global-wrapper">
  //       <main>{children}</main>
  //       <footer>{footer}</footer>
  //     </div>
  //   </div>
  // )
}

export default Layout
