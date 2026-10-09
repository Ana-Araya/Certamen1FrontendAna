import { useState } from 'react';
import GuerreroForm from '../components/GuerreroForm.jsx';
import EjercitoView from '../components/EjercitoView.jsx';

function EjercitoContainer() {
  const [tropas, setTropas] = useState([]);
  const [datosGuerrero, setDatosGuerrero] = useState({
    nombre: '', tipo: 'Orco', nivel: 50, rango: '', rating: 1
  });

  const manejarEntrada = (e) => {
    const { name, value } = e.target;
    setDatosGuerrero((datosActuales) => ({ ...datosActuales, [name]: value }));
  };

  const registrarGuerrero = (e) => {
    e.preventDefault();
    setTropas((tropasActuales) => [...tropasActuales, datosGuerrero]);
    setDatosGuerrero({ nombre: '', tipo: 'Orco', nivel: 50, rango: '', rating: 1 });
  };

  const eliminarGuerrero = (indice) => {
    setTropas((tropasActuales) => tropasActuales.filter((_, i) => i !== indice));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mb-4">
          <GuerreroForm 
            datosGuerrero={datosGuerrero}
            manejarEntrada={manejarEntrada}
            registrarGuerrero={registrarGuerrero}
            setDatosGuerrero={setDatosGuerrero}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <EjercitoView tropas={tropas} eliminarGuerrero={eliminarGuerrero} />
        </div>
      </div>
    </div>
  );
}

export default EjercitoContainer;