import React, { useEffect, useState } from 'react'
import './style.css';


export const Dolar = () => {
    // URL de la API del dólar blue
    const apiUrl = "https://dolarapi.com/v1/dolares/blue";
    const [dolarBlue, setDolarBlue] = useState({
        compra: 0,
        venta: 0,
        fechaActualizacion: ''
    })

    // Declaramos la función para tomar los datos de la api
    const fetchApi = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }
            const data = await response.json();
            setDolarBlue(data);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])
    

    var fecha = new Date(dolarBlue.fechaActualizacion);
    // Obtenemos los componentes de la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0, entonces sumamos 1
    const anio = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const fechaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')} ${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

    return (
        <div>
            {
                dolarBlue ? (
                    <div className='divDolar'>
                        <h3>Dólar blue</h3>
                        <p>{fechaFormateada}</p>
                        <p>Compra: ${dolarBlue.compra}</p>
                        <p>Venta: ${dolarBlue.venta}</p>
                    </div>
                ):(
                    <p>Cargando...</p>
                )
            }
        </div>
    )
};

export default Dolar






















