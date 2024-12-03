'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function IniciarSesion() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const router = useRouter();

  const handleInicioSesion = (e: React.FormEvent) => {
    e.preventDefault();

    // Simula autenticación
    if (email === 'test@example.com' && contrasena === 'password') {
      setMensaje('Inicio de sesión exitoso.');
      setTimeout(() => router.push('/dashboard'), 2000); // Redirige al dashboard
    } else {
      setMensaje('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      <form onSubmit={handleInicioSesion}>
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

        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta? <a href="/registrar">Regístrate aquí</a>.
      </p>
    </div>
  );
}
