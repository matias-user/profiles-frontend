import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/layout/NotFound'
import { NavBar } from './components/layout/NavBar'
import { Login } from './components/register/Login'
import { Register } from './components/register/Register'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={ <NotFound /> } />
        <Route path='/Login' element={ <Login/> } />
        <Route path='/Register' element={ <Register/> } />
      </Routes>
    </>
  )
}
