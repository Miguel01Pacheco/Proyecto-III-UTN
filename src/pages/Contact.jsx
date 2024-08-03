import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { userName } = useContext(UserContext);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío del formulario
    console.log('Enviado:', form);
    alert('Mensaje enviado');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <p>Usuario: {userName}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu email"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Contact;
