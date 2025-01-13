"use client"
import React, { useState } from 'react';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState('');
  const [terminos, setTerminos] = useState(false);
  const [politica, setPolitica] = useState(false);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleContrasenaChange = (e) => setContrasena(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTerminosChange = (e) => setTerminos(e.target.checked);
  const handlePoliticaChange = (e) => setPolitica(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Registro exitoso');

    window.location.href = '/'; 
  };

  return (
    <div>
      <h1><b>GameRate Hub</b> </h1>
      <p>La brujula para gamers en busca de su proxima aventura.</p>
      <h2>Formulario de Registro</h2>
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

        <label htmlFor="email">Pon tu email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>
          <input
            type="checkbox"
            id="terminos"
            checked={terminos}
            onChange={handleTerminosChange}
            required
          />
          Acepto los <a href="/terminos">Términos y Condiciones</a>
        </label>

        <label>
          <input
            type="checkbox"
            id="politica"
            checked={politica}
            onChange={handlePoliticaChange}
            required
          />
          Acepto la <a href="/politica">Política de Privacidad</a>
        </label>

        <p>¿Ya tienes cuenta? <a href="/iniciarSesion">Inicia sesión</a></p>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

