import React, { useEffect } from 'react'
import { fetchRoles } from '../../services/fetchRoles'
import { useState } from 'react'

export const FormUser = ({ urlApi, titleForm }) => {

    const [roles, setroles] = useState([]);

    useEffect(() => {
        fetchRoles('http://localhost:8080/api/v1/roles')
            .then(data => setroles(data))
    }, [])

    useEffect(() => {
        console.log(roles);

    }, [roles])



    return (
        <>
            <h1>{ titleForm }</h1>

            <form action={urlApi} method='POST' >
                <div className='mb-3' >
                    <label className='form-label' htmlFor="username">Username</label>
                    <input className='form-control' type="text" name='username' />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="password">Contraseña</label>
                    <input className='form-control' type="password" name='password' />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="password-confim">Volver a ingresar contraseña</label>
                    <input className='form-control' type="password" name='password-confim' />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-control' type="email" name='email' />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="phone">Teléfono</label>
                    <input className='form-control' type="tel" name='phone' />
                </div>

                <div className='mb-3' >
                    <label className='form-label' htmlFor="roles">Selección de rol</label>
                    <select className='form-select' name="roles[]" id="roles" >
                        <option value="">Selecciona una opción</option>
                        {roles.map(role => {
                            return <option key={role.id} value={role.id} >{role.name}</option>
                        })}
                    </select>
                </div>

                <div className='mb-3' >
                    <button className='btn btn-primary' type='submit' >Enviar</button>
                    <button className='btn btn-warning ms-3'  >Volver</button>
                </div>
            </form>
        </>

    )
}
