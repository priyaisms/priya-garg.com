import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Header = () => {
  return (
    <nav style={{background:'#f2f2f2', margin: '15px 0px 15px 0px', width: '100%'}}>

      <ol> 
        <li>
          <Link style={{
              // color: `inherit`,
              margin: '15px 0px 10px 0px',
              // textAlign: 'center',
              fontSize: '150%',
              display: 'flex',
            }}  
             to="/">blog</Link>
        </li>
        <li>
          <Link style={{
              // color: `inherit`,
              margin: '15px 0px 10px 0px',
              // textAlign: 'center',
              fontSize: '150%',
              display: 'flex',
            }}   
            to="/about">about</Link>
        </li>
      </ol>
    </nav>
  )
}

const   Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const aboutPath = `${__PATH_PREFIX__}/about`
  let header

  if (location.pathname === rootPath || location.pathname === aboutPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1),
          marginTop: 0,
          marginBottom: 10,
          textTransform: `uppercase`,
            textAlign: 'center',
        }}
      > 
        <Link
          style={{
            boxShadow: `none`,
            boxShadow: `none`,
            textDecoration: `none`,
            color: 'inherit',
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
        
  } else {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textTransform: `uppercase`,
            textAlign: 'center',
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Header />
      <main>{children}</main>
      <footer style={{fontSize: '11px'}}>
      © {new Date().getFullYear()} Priya Garg, Built with
        {` `} 
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
