import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg  ">
    <Link to = '/'>
    <a class="navbar-brand" href="#">CRUD</a>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
  </nav>
  )
}

export default NavBar