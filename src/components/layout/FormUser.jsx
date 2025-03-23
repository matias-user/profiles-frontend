import React, { useEffect } from 'react'
import { fetchRoles } from '../../utils/fetchRoles'
import { useState } from 'react'

export const FormUser = ({ urlApi }) => {

    const [roles, setroles] = useState();

    useEffect(() => {
        setroles(fetchRoles('http://localhost:8080/api/v1/roles'));
        console.log(roles);
        
    }, [])
    

    return (
        <form action={urlApi} method='POST' >
            <div className='mb-3' >
                <label className='form-label' htmlFor="username"></label>
                <input className='form-control' type="text" name='username' />
            </div>
            <div className='mb-3' >
                <label className='form-label' htmlFor="password"></label>
                <input className='form-control' type="password" name='password' />
            </div>
            <div className='mb-3' >
                <label className='form-label' htmlFor="password-confim"></label>
                <input className='form-control' type="password" name='password-confim' />
            </div>
            <div className='mb-3' >
                <label className='form-label' htmlFor="email"></label>
                <input className='form-control' type="email" name='email' />
            </div>
            <div className='mb-3' >
                <label className='form-label' htmlFor="phone"></label>
                <input className='form-control' type="tel" name='phone' />
            </div>

            <div className='mb-3' >
                <label className='form-label' htmlFor="roles">Selección de roles</label>
                <select name="roles[]" id="roles" >
                    <option value=""></option>
                </select>
            </div>

            <div className='mb-3' >
                <button className='btn btn-primary' type='submit' >Enviar</button>
                <button className='btn btn-warning' >Volver</button>
            </div>
        </form>

    )
}
