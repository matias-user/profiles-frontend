import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../services/fetchApi';


const pathRouteApiUsers = 'users';

export const Users = () => {

    const [users, setusers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchApi(pathRouteApiUsers)
            .then(data => {
                setusers(data);
                setIsLoading(false);
            })

    }, [])


    return (
        <>
            <h2>Listado de usuarios</h2>

            {isLoading

                ? <div className='d-flex justify-content-center align-items-center vh-100' >
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }} >
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </div>
                : <table className='table' >
                    <thead>
                        <tr>
                            <th scope='col' >
                                #
                            </th>
                            <th scope='col' >
                                Username
                            </th>
                            <th scope='col' >
                                Email
                            </th>
                            <th scope='col' >
                                Teléfono
                            </th>
                            <th scope='col' >
                                Roles
                            </th>
                            <th scope='col' >
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users && users.map(user => {
                                return (
                                    <tr key={user.id} >
                                        <td>
                                            {user.id}
                                        </td>
                                        <td>
                                            {user.username}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.phoneNumber}
                                        </td>
                                        <td>
                                            {
                                                user.roles.map(role => (
                                                    <span key={role.id} className='badge bg-primary me-2' >
                                                        {role.name}
                                                    </span>
                                                ))
                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' >
                                                Editar
                                            </button>
                                            <button className='btn btn-danger ms-2' >
                                                Borrar
                                            </button>
                                        </td>

                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            }

        </>
    )
}
