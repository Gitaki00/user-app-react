import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">user-app</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/add">Add</Link>
        <Link class="nav-link" to="/search">Search</Link>
        <Link class="nav-link" to="/delete">Delete</Link>
        <Link class="nav-link" to="/view">ViewAll</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar