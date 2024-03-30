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
        <div class="card-container">
        <div class="card" key={data.identify}>
          <img src={data.image} alt="" class="card-image" />
          <div class="card-content">
            <p class="card-info">Identify: {data.identify}</p>
            <p class="card-info">Name: {data.names}</p>
            <p class="card-info">Telephone: {data.telephone}</p>
          </div>
        </div>
      </div>
      

        
      ))}
      </div>
    </div>  

  
  );
}

export default App;
