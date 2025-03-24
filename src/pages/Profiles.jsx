import React from 'react'
import { SideBar } from '../components/layout/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Users } from '../components/users/Users'

export const Profiles = () => {
  return (
    <section className='container' >
      <SideBar />
      <Routes>
        <Route path='users' element={ <Users /> } />
      </Routes>
    </section>
  )
}
