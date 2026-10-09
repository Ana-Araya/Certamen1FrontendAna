import { useState } from 'react';
import GuerreroForm from '../components/GuerreroForm.jsx';
import EjercitoView from '../components/EjercitoView.jsx';

function EjercitoContainer() {
  const [tropas, setTropas] = useState([]);
  const [formulario, setFormulario] = useState({
    nombre: '', tipo: 'Orco', nivel: 50, rango: '', rating: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTropas([...tropas, formulario]);
    setFormulario({ nombre: '', tipo: 'Orco', nivel: 50, rango: '', rating: 1 });
  };

  const handleKill = (index) => {
    const nuevasTropas = tropas.filter((_, i) => i !== index);
    setTropas(nuevasTropas);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mb-4">
          <GuerreroForm 
            formulario={formulario} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            setFormulario={setFormulario} 
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <EjercitoView tropas={tropas} handleKill={handleKill} />
        </div>
      </div>
    </div>
  );
}

export default EjercitoContainer;