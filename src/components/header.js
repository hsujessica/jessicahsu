import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="header-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div className="nav">
      <Link to="/">Code</Link>
      <Link to="/craft">Craft</Link>
    </div>
  </div>
)

export default Header
