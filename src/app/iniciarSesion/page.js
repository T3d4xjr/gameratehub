"use client"
import React, { useState } from 'react';

export default function Login() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleContrasenaChange = (e) => setContrasena(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Iniciando sesión');

    window.location.href = '/'; 
  };

  return (
    <div >
       <h1><b>GameRate Hub</b> </h1>
       <p>La brujula para gamers en busca de su proxima aventura.</p>
      <h2>Formulario de Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Pon tu nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />

        <label htmlFor="contrasena">Pon tu contraseña:</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={handleContrasenaChange}
          required
        />

        <button type="submit">Iniciar sesión</button>
      </form>

      <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
    </div>
  );
}
