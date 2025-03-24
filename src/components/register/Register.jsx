import React from 'react'
import { FormUser } from '../layout/FormUser'

export const Register = () => {
  return (
    <div  className='container-lg' >
      <FormUser 
        urlPostApi='http://localhost:8080/api/v1/users' 
        titleForm='Registro de usuario' 
        redirect={ '/login' }
        />
    </div>
  )
}
