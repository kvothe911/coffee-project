import React, { useState, useEffect } from 'react';
import '/src/App.css'

function ScrollPercentage() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    // Obtener la altura total del documento
    const documentHeight = document.documentElement.scrollHeight;
    // Obtener la altura visible de la ventana
    const viewportHeight = window.innerHeight;
    // Obtener la posición actual del scroll
    const scrollTop = window.scrollY;
    
    // Calcular el porcentaje de scroll
    const scrollTopPercent = (scrollTop / (documentHeight - viewportHeight)) * 100;
    setScrollPercent(scrollTopPercent);
  };

  useEffect(() => {
    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);
    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className='text-white fixed top-1/2 left-1/2'>Porcentaje de Scroll: {Math.round(scrollPercent)}%</h1>
    </div>
  );
}

export default ScrollPercentage;