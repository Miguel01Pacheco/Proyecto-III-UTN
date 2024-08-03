import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z]{1,20}$/.test(name)) {
      setUserName(name);
      navigate('/portfolio');
    } else {
      alert('Nombre no válido');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Home;
