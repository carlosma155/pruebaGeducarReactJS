import React from 'react';
import '../assets/styles/Footer.scss';

const Footer = () => (
    <footer className="footer pt-4 pb-4">
        <div className="container">
            <div className="row text-center">
                <div className="col-6 col-lg">
                    <a href="/">Terminos y condiciones</a>
                </div>
                <div className="col-6 col-lg">
                    <a href="/">Acuerdos de privacidad</a>
                </div>
                <div className="col-4 col-lg">
                    <a href="/">Ayuda</a>
                </div>
                <div className="col-4 col-lg">
                    <a href="/">Nosotros</a>
                </div>
                <div className="col-4 col-lg">
                    <a href="/">Contáctenos</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;