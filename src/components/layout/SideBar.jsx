import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className='dropdown position-fixed end-0 vh-100 me-3'  >
            <button className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    >
                Abrir acciones
            </button>
            <ul className='dropdown-menu ' >
                <li>
                    <Link
                        className='dropdown-item'
                        to='/profiles/users'
                        >
                            Ver usuarios
                    </Link>
                </li>
            </ul>
        </div>
    )
}
