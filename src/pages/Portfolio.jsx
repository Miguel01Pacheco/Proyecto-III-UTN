import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Portfolio = () => {
  const { userName } = useContext(UserContext);

  if (!userName) {
    return (
             <>
             <div>Por favor, ingresa tu nombre en la página principal.</div>;
             <Link to="/">Volver al inicio</Link>
             </>
    );
    
  }

  return (
    <div>
      <h1>Portfolio de {userName}</h1>
      <img src="path/to/your/photo.jpg" alt="Foto del Desarrollador" />
      <p>Presentación sobre mí...</p>
      <p>Educación...</p>
      <p>Proyectos...</p>
      <p>Experiencia Laboral...</p>
      <Link to="/contacto">Formulario de Contacto</Link>
    </div>
  );
};

export default Portfolio;
