import { Link } from 'react-router-dom';


export const FormUser = ({ urlPostApi, titleForm, redirect }) => {

    return (
        <>
            <h2 className='mb-2' >{ titleForm }</h2>

            <form action={urlPostApi} method='POST' >
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
                    <button className='btn btn-primary' type='submit' >Enviar</button>
                    <Link className='btn btn-warning ms-3' to={ redirect }  >Volver</Link>
                </div>
            </form>
        </>

    )
}
