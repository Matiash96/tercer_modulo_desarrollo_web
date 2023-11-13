import React, { useState, useEffect } from 'react';
import { pedirCanias } from '../../helpers/pedirCanias';
import './style.css'
import Swal from 'sweetalert2';
import { Counter } from '../Counter/Counter';

export const ProductListCanias = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        pedirCanias()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Cuidado, tenés un error en la carga!',
                    text: `Tenés un error: ${error}`,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // Agrega un arreglo de dependencias vacío para que se ejecute una vez

    const handleAgregarAlCarrito = () => {
        Swal.fire({
            title: 'Producto agregado al carrito',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    }

    const cargando = () =>{
        let timerInterval;
        Swal.fire({
        title: "Cargando...",
        timer: 400,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");

            if (timer) {
                // Actualiza el contenido del elemento cada segundo
                timerInterval = setInterval(() => {
                // Convierte milisegundos a segundos y redondea
                const secondsLeft = Math.round(Swal.getTimerLeft() / 1000);
                timer.textContent = `${secondsLeft}s`;
                }, 1000);
            }
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
        });
    }

    return (
        <>  
            <div className='body-card-list'>
                {loading ? ( cargando() ) : 
                (
                    <div className='card-list'>
                        {items.map((item) => (
                            <div key={item.id} className='card'>
                                <img src={item.photo} alt={item.photo} />
                                <p>{item.name}</p>
                                <h5>${item.price}</h5>
                                <Counter/>
                                <button className="button" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductListCanias