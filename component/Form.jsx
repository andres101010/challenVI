import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormGroup = ({onChangeNombre, onChangeFecha_fabricacion, onChangeValor, onChangeCantidad, save,nombre,fecha_fabricacion,valor,cantidad,showButton,update,cancel})=>{
    
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ej toyota" onChange={onChangeNombre} value={nombre}/>
          <Form.Label className="text-white">Fecha de Fabricacion</Form.Label>
          <Form.Control type="text" placeholder="Ej: 1986-02-28" onChange={onChangeFecha_fabricacion} value={fecha_fabricacion}/>
          <Form.Label className="text-white">Valor</Form.Label>
          <Form.Control type="number" placeholder="Ej: 10.000" onChange={onChangeValor} value={valor} />
          <Form.Label className="text-white">Cantidad</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" onChange={onChangeCantidad} value={cantidad} />
          { showButton ?  <Button variant="warning" type="submit" className="m-3" onClick={(e)=>{update(e)}}>
                Editar       
          </Button>
          :
          <Button variant="success" type="submit" className="m-3" onClick={(e)=>{save(e)}}>
                Guardar       
          </Button>
          }
          <Button variant="danger" className="m-3" onClick={()=>{cancel()}}>
                Cancelar       
          </Button>
        </Form.Group>
        </Form>

    )
};

export default FormGroup;