import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: '8px', backgroundColor: '#fff' }}>
        <div className="card-body text-center">
          <h3 className="mb-3">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required

                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#3b2f2f' }}>Contraseña</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn" style={{ backgroundColor: '#4caf50', color: '#fff', borderColor: '#4caf50' }}>
                Iniciar sesión
              </button>
            </div>
          </form>

          <div className="mt-3">
            <a href="#" className="text-decoration-none" >¿Olvidaste tu contraseña?</a> 
          </div>
          <div className="mt-2">
            <p>¿No tienes una cuenta? <a className="text-decoration-none"> <Link to="/Register"> Crea una aquí</Link></a></p>
          </div>
        </div>
      </div>
    </div>
  );
};