
import React, { useState } from "react";


const Avisos = ({ avisos }) => {
  const [aviso, setAviso] = useState([])
  const intervalId = setInterval(() => {
  
  fetch("https://8ce6d78d-e58a-4bec-9296-18cdf3509714-00-1m4lisu2dizfq.riker.replit.dev/")
  .then((response) => response.json())
  .then(data =>{
    setAviso(data)
  })
}, 5000)
  if (!avisos || avisos.length === 0) return null;

  return (
    <div className="avisos-container">
      <h2>Avisos do Sistema</h2>
      <ul>
        {aviso.map((aviso, index) => (
          <li key={index} className="aviso-item">
            ⚠️ {aviso}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Avisos;
