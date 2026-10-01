import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ background: "#222", padding: "15px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
      <Link to="/blog" style={{ color: "white", marginRight: "20px" }}>Blogs</Link>
    </div>
  )
}

export default Navbar
