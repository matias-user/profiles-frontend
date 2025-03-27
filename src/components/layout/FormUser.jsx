import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from './Alert';

const urlPostApi = `${import.meta.env.VITE_API_URL_DEV}/users`;

export const FormUser = ({ urlPostApi, titleForm, redirect }) => {

    const [form, setForm] = useState({
        username: '',
        password: '',
        passwordConfim: '',
        email: '',
        phone: ''  
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(urlPostApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)   
            });
            if (response.ok) {
                setIsFormSubmitted(true);
              } else {
                console.error("Error al enviar el formulario");
              }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }

    }

    const handleInputChange = (e) => {  
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <h2 className='mb-2' >{ titleForm }</h2>

            <form onSubmit={ handleSubmit }
                >
                <div className='mb-3' >
                    <label className='form-label' htmlFor="username">Username</label>
                    <input 
                        className='form-control' 
                        type="text" 
                        name='username' 
                        onChange={ handleInputChange }
                        />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="password">Contraseña</label>
                    <input 
                        className='form-control' 
                        type="password" 
                        name='password' 
                        onChange={ handleInputChange }
                        />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="password-confim">Volver a ingresar contraseña</label>
                    <input 
                        className='form-control' 
                        type="password" 
                        name='password-confim'
                        onChange={ handleInputChange }
                        />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="email">Email</label>
                    <input 
                        className='form-control' 
                        type="email" 
                        name='email' 
                        onChange={ handleInputChange }
                        />
                </div>
                <div className='mb-3' >
                    <label className='form-label' htmlFor="phone">Teléfono</label>
                    <input 
                        className='form-control' 
                        type="tel" 
                        name='phone' 
                        onChange={ handleInputChange }
                        />
                </div>

                <div className='mb-3' >
                    <button className='btn btn-primary' type='submit' >Enviar</button>
                    <Link className='btn btn-warning ms-3' to={ redirect }  >Volver</Link>
                </div>

                { isFormSubmitted && <Alert text='Usuario registrado con éxito' color='success' /> }
            </form>
        </>

    )
}
