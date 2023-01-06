import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

const Tabledense = ({data, showForm,edit,nombre,fecha_fabricacion,valor,cantidad})=>{
    return(
        <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-white">#</th>
            <th className="text-white">Nombre</th>
            <th className="text-white">Fecha De Fabricacion</th>
            <th className="text-white">Valor $</th>
            <th className="text-white">Cantidad</th>
            <th className="text-white">Editar</th>
          </tr>
        </thead>
        <tbody>
        {
           data.length === 0 ? <tr><td colSpan={5}>No hay datos</td></tr>
           :
           data.map((row)=>(
            <tr key={row.idtabla} onClick={()=>{edit(row)}}>
              <td className="text-white">{row.idtabla}</td>
              <td className="text-white" >{row.nombre}</td>
              <td className="text-white" >{row.fecha_fabricacion}</td>
              <td className="text-white" >{row.valor}</td>
              <td className="text-white" >{row.cantidad}</td>
              <td><Button variant="warning">Editar</Button></td>
            </tr>

           ))
        }
        </tbody>
      </Table>
      <Button variant="primary" onClick={()=>{showForm()}}>Agregar</Button>
      </div>

    )
}
export default Tabledense;