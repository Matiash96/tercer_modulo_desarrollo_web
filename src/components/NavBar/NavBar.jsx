import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
    return(
        <div className='nav'>
            <div className='nav-logo'>
                <Link className='link' to="/">
                    <img className='imagen' src="/media/logo_tienda.webp" alt="" />
                </Link>
                <Link className='link nombre-tienda' to="/">Pesca-Mar</Link>
            </div>
            <Link className='link nav-link' to="/canias">Cañas</Link>
            <Link className='link nav-link' to="/reeles">Reeles</Link>
        </div>
    )
}