import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

const Agregarcontactos = () => {
  const [identify, setidentify] = useState('');
  const [names, setnames] = useState('');
  const [telephone, settelephone] = useState('');
  const [image, setImage] = useState('');

  const setFormulario = async () => {
    const data = {
      identify: identify,
      names: names,
      telephone: telephone,
      image: image,
    };

    const response = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", data);
    console.log(response);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Contacto agregado!",
        showConfirmButton: false,
        timer: 2000
      });
      
    window.location.reload(); 

  };


  return (
    <div className='containercontactos'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Identify</Form.Label>
          <Form.Control type="text" placeholder="identify" onChange={(e) => setidentify(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>names</Form.Label>
          <Form.Control type="text" placeholder="prnamesice" onChange={(e) => setnames(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>telephone</Form.Label>
          <Form.Control type="text" placeholder="telephone" onChange={(e) => settelephone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>image</Form.Label>
          <Form.Control type="email" placeholder="imagen" onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={setFormulario}>agregar contacto</Button>{' '}

    </div>
  );
};

export default Agregarcontactos;
