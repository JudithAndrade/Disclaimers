'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Registrar() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const router = useRouter();

  const handleRegistro = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !email || !contrasena) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    // Simulación del registro
    console.log('Usuario registrado:', { nombre, email, contrasena });
    setMensaje('Usuario registrado exitosamente.');
    setTimeout(() => router.push('/iniciar-sesion'), 2000); // Redirige a Iniciar Sesión
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      <form onSubmit={handleRegistro}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br /><br />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        /><br /><br />

        <button type="submit">Registrar</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <a href="/iniciar-sesion">Inicia sesión aquí</a>.
      </p>
    </div>
  );
}
