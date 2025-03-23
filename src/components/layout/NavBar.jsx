import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/' className='nav-link active' >Inicio</Link>
          <Link to='/login' className='nav-link' >Inicio de sesión</Link>
          <Link to='/register' className='nav-link' >Registro</Link>
          <Link to='/profiles' className="nav-link">Perfil usuario</Link>
          <a className="nav-link" href='#'>Cuentas</a>
        </div>
      </div>
    </div>
  </nav>
    )
}
