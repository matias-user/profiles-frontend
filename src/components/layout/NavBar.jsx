import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" >
            <Link to='/'>Inicio</Link>
          </a>
          <a class="nav-link" href="#">Inicio de sesión</a>
          <a class="nav-link" href="#">Registro</a>
          <a class="nav-link" href='#'>Perfil usuario</a>
          <a class="nav-link" href='#'>Cuentas</a>
        </div>
      </div>
    </div>
  </nav>
    )
}
