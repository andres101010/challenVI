import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabledense from "./Table";
import axios from "axios";
import FormGroup from "./Form";

const Main = ()=>{
    //Estados
    const [data, setData] = useState([]);
    const [activarForm, setActivarForm] = useState(false);
    const [showTable, setShowTable] = useState(true);
    const [idtabla, setIdTabla] = useState(0)
    const [nombre, setNombre] = useState("");
    const [fecha_fabricacion, setFecha_fabricaion] = useState(0);
    const [valor, setValor] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [showButton, setShowButton] = useState(false);
    //Captura de datos del formulario
    const onChangeNombre = (e)=>{setNombre(e.target.value)}
    const onChangeFecha_fabricacion = (e)=>{setFecha_fabricaion(e.target.value)}
    const onChangeValor = (e)=>{setValor(e.target.value)}
    const onChangeCantidad = (e)=>{setCantidad(e.target.value)}

    //Funcion De Carga de Datos
    const getData = async ()=>{
       const respuesta = await axios.get('http://localhost:3001/vehiculos')
       setData(respuesta.data)
    };
    useEffect(()=>{
        getData()
    },[]);

    //Funcion de mostrar y ocultar formulario y tabla
    const showForm= ()=>{
        setActivarForm(true)
        setShowTable(false)
    };

    //Funcion Boton Cancelar
    const cancel = ()=>{
        setShowTable(true)
        setActivarForm(false)
        setShowButton(false)
    }
    //Funcion de guardado de datos nuevos
    const save = (e)=>{
        e.preventDefault()
        if(nombre === "" || fecha_fabricacion === "" || valor === 0 || cantidad === 0){
            alert('Debes completar todos los campos')
        }else{
          axios.post('http://localhost:3001/crear-vehiculo',{
            nombre:nombre,
            fecha_fabricacion:fecha_fabricacion,
            valor:valor,
            cantidad:cantidad
          }).then(()=>{
            setNombre("")
            setFecha_fabricaion(0)
            setValor(0)
            setCantidad(0)
            setShowTable(true)
            setActivarForm(false)
            getData()
          }).catch((error)=>{
            console.log(error);
          })
        }
    };
    //Funcion de captura de datos ya existentes
    const edit = ((obj)=>{
        setIdTabla(obj.idtabla)
        setNombre(obj.nombre)
        setFecha_fabricaion(obj.fecha_fabricacion)
        setValor(obj.valor)
        setCantidad(obj.cantidad)
        setShowTable(false)
        setActivarForm(true)
        setShowButton(true)
    });

    //Funcion de editar
    const update = (e)=>{
        e.preventDefault()
        if(nombre === "" || fecha_fabricacion === "" || valor === 0 || cantidad === 0){
            alert("No debes dejar campos vacios")
        }else{
            axios.put(`http://localhost:3001/actualizar-vehiculo/${idtabla}`,{
                nombre:nombre,
                fecha_fabricacion:fecha_fabricacion,
                valor:valor,
                cantidad:cantidad
            }).then(()=>{
                setNombre("")
                setFecha_fabricaion("")
                setValor("")
                setCantidad("")
                setShowTable(true)
                setActivarForm(false)
                setShowButton(false)
                getData()
            }).catch((error)=>{
                console.log(error)
            })
        }
    };
    




    return(
        <div className="container">
        <h1 className="text-center text-white mb-5">Ventas de vehiculos</h1>

        { 
            showTable &&
            <Tabledense data={data} showForm={showForm} edit={edit} nombre={nombre} fecha_fabricacion={fecha_fabricacion}
            valor={valor} cantidad={cantidad} />
        }
        {
            activarForm &&
            <FormGroup onChangeNombre={onChangeNombre} onChangeFecha_fabricacion={onChangeFecha_fabricacion}
            onChangeValor={onChangeValor}
            onChangeCantidad={onChangeCantidad} save={save} nombre={nombre} fecha_fabricacion={fecha_fabricacion} valor={valor} cantidad={cantidad}
            showButton={showButton} update={update} cancel={cancel} />
        }
        </div>
        
    )
}
export default Main;