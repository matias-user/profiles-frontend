import React from "react";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
      style={{
        backgroundImage: 'url(https://images4.alphacoders.com/116/1164286.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
      }}
    >
      <h2 className="text-light fw-bold">Parece que has viajado demasiado lejos... 🪐</h2>
      <p className="text-light">La página que buscas no existe en este universo.</p>
      <Link to={"/"} className="mt-3">
        <button className="return-btn">Volver a la Tierra 🌍</button>
      </Link>
    </div>
    </>
  );
};
