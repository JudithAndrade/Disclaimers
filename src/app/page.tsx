'use client';

import { useState } from 'react';
import Link from 'next/link';
import './styles/globals.css';

export default function Home() {
  const [mostrarAviso, setMostrarAviso] = useState(true);
  const [mostrarCookies, setMostrarCookies] = useState(true);

  // Manejar aceptación de aviso de privacidad
  const handleAceptarAviso = () => {
    setMostrarAviso(false);
  };

  // Manejar aceptación/rechazo de cookies
  const handleAceptarCookies = () => {
    setMostrarCookies(false);
  };

  const handleRechazarCookies = () => {
    setMostrarCookies(false);
  };

  return (
    <div>
      {/* Modal para el Aviso de Privacidad */}
      {mostrarAviso && (
        <div className="modal modal-aviso">
          <div className="modal-content">
            <h2>Aviso de Privacidad</h2>
            <p>
            Artículo 2. Son objetivos de la presente Ley:
                
                VI. Garantizar que toda persona pueda ejercer el derecho a la protección de los datos personales;
                 
                Artículo 3. Para los efectos de la presente Ley se entenderá por:

                II. Aviso de privacidad: Documento a disposición del titular de forma física, electrónica o en
                    cualquier formato generado por el responsable, a partir del momento en el cual se recaben
                    sus datos personales, con el objeto de informarle los propósitos del tratamiento de los
                    mismos;

                III. Bases de datos: Conjunto ordenado de datos personales referentes a una persona física
                    identificada o identificable, condicionados a criterios determinados, con independencia de la
                    forma o modalidad de su creación, tipo de soporte, procesamiento, almacenamiento y
                    organización;
                                
                Artículo 4. La presente Ley será aplicable a cualquier tratamiento de datos personales que obren en
                soportes físicos o electrónicos, con independencia de la forma o modalidad de su creación, tipo de
                soporte, procesamiento, almacenamiento y organización.
            </p>
            <div className="modal-buttons">
              <button onClick={handleAceptarAviso} className="btn">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para el Aviso de Cookies */}
      {mostrarCookies && (
        <div className="modal modal-cookies">
          <div className="modal-content">
            <h2>Aviso de Cookies</h2>
            <p>
              Este sitio utiliza cookies para mejorar tu experiencia. Puedes
              aceptar o rechazar el uso de cookies.
            </p>
            <div className="modal-buttons">
              <button onClick={handleAceptarCookies} className="btn">
                Aceptar Cookies
              </button>
              <button onClick={handleRechazarCookies} className="btn cerrar-btn">
                Rechazar Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <h1>Bienvenido a Aviso de Privacidad Disclaimer</h1>
      <Link href="/registrar">Registrar</Link> |{' '}
      <Link href="/iniciar-sesion">Iniciar Sesión</Link>
    </div>
  );
}

