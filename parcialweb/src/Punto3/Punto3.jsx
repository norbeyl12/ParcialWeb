import { useEffect, useState } from "react";
import axios from "axios";
import "./punto3.css"
import Agregarcontactos from './agregarContactos';

function App() {
  const [contactos, setcontactos] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
    console.log(response);
    setcontactos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div>
        <Agregarcontactos />
      </div>
      <h2>Contactos usuarios</h2>
      <div className="grid-container">
        {contactos?.map((data) => (
          <div className="card-container">
            <div className="card" key={data.identify}>
              <img src={data.image} alt="" className="card-image" />
              <div className="card-content">
                <p className="card-info">Identify: {data.identify}</p>
                <p className="card-info">Name: {data.names}</p>
                <p className="card-info">Telephone: {data.telephone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
