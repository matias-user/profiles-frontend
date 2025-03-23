import React from 'react'
import { FormUser } from '../components/layout/FormUser'

export const Profiles = () => {
  return (
    <section className='mt-1' >
        <h1 className='my-4' >Perfil de usuario XXX</h1>
        <FormUser 
            urlApi='http://localhost:8080/api/v1/users'
            titleForm='Crear usuario'
            />
    </section>
  )
}
