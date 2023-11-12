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

    return (
        <>  
            <div className='body-card-list'>
                {loading ? (
                    // Aquí puedes mostrar una pantalla de carga
                    <div className='cargando'>Cargando...</div>
                ) : (
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