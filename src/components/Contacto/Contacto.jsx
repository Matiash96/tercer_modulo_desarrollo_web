import React from 'react'
import './style.css'

export const Contacto = () => {
    return (
        
        <div className='footer'>
            <div className='container-body'>
                <section className='column1'>
                    <h1>Sobre nosotros</h1>
                    <p>En <strong>El balde de carnada</strong>, somos apasionados por todo lo relacionado con la pesca. Ya sea que seas un pescador experimentado o estés comenzando en este emocionante mundo, estamos aquí para satisfacer todas tus necesidades de pesca. <br /> 
                        Lo que nos distingue es nuestra amplia selección de equipos de pesca de las marcas más reconocidas en la industria. Desde cañas y reeles de última generación hasta señuelos especializados y accesorios esenciales, tenemos todo lo que necesitas para tener una experiencia de pesca exitosa y emocionante. <br />
                        Gracias por visitar El balde de carnada. Esperamos verte pronto en nuestras instalaciones o ayudándote en línea mientras persigues tus sueños de pesca. Si tienes alguna pregunta, no dudes en ponerte en contacto con nuestro equipo amigable y apasionado. <br /> <strong>¡Buena pesca!</strong>
                        <br /> </p>
                </section>

                <section class="column2">
                <h1>Redes Sociales</h1>
                <div class="footer-row">
                    <a href="#"><img src="./media/footer/facebook.png" alt="icono-facebook"/></a>
                    <a href="#" class="link">Siguenos en Facebook</a>
                </div>
                <div class="footer-row">
                    <a href="#"><img src="./media/footer/youtube.png" alt="icono-youtube"/></a>
                    <a href="#" class="link">Siguenos en YouTube</a>
                </div>
                <div class="footer-row">
                    <a href="#"><img src="./media/footer/instagram.png" alt="icono-instagram"/></a>
                    <a href="#" class="link">Siguenos en Instagram</a>
                </div>
                <div class="footer-row">
                    <a href="#"><img src="./media/footer/linkedin.png" alt="icono-linkedin"/></a>
                    <a href="#" class="link">Siguenos en Linkedin</a>
                </div>
            </section>

            <section class="column3">
                <h1>Informacion Contacto</h1>
                <div class="footer-row">
                    <a href="https://goo.gl/maps/HEG2ZeaaEfGmyB8V7" target="_blank"><img
                            src="./media/footer/maps.png" alt="icono-ubicacion"/></a>
                    <a class="link" href="https://goo.gl/maps/HEG2ZeaaEfGmyB8V7" target="_blank">Av. Hipólito Yrigoyen
                        325, X5000 Córdoba</a>
                </div>
                <div class="footer-row">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"><img
                            src="./media/footer/whatsapp.png" alt="icono-whatsapp"/></a>
                    <a class="link" target="_blank"
                        href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO">Contactanos</a>
                </div>
                <div class="footer-row">
                    <a href="mailto:tubuenapesca@gmail.com"><img src="./media/footer/email.png"
                            alt="icono-mail"/></a>
                    <a class="link" href="mailto:tubuenapesca@gmail.com">elbaldedecarnada@gmail.com</a>
                </div>
            </section>
            </div>
        </div>
    )
}

export default Contacto

