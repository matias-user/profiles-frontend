import React from "react";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-warning text-dark text-center min-vh-100">
        <h2>Página no encontrada! 😢</h2>
        <Link to={"/"} > <p><a className="link-offset-2 link-underline link-underline-opacity-0">Volver a la página de inicio</a></p> </Link>
      </div>
    </>
  );
};
