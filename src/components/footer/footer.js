import React from 'react';

function Footer() {
    return (
        <div className="App-footer">
            <footer className="footer">
                <div className="container_footer">
                    <div className="row_footer">
                        <div className="footer-col">
                            <h4>DT Airlines</h4>
                            <ul className="item">
                                <li><a>Experiencia DT</a></li>
                                <li><a>Prepara tu viaje</a></li>
                                <li><a>Mis viajes</a></li>
                                <li><a>Estado de vuelo</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Informacion Legal</h4>
                            <ul className="item">
                                <li><a>Devolución de tasas de embarque</a></li>
                                <li><a>Conoce tus derechos</a></li>
                                <li><a>Cargos por servicio</a></li>
                                <li><a>Políticas de privacidad y seguridad</a></li>
                                <li><a>Términos de uso</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Portales asociados</h4>
                            <ul className="item">
                                <li><a>LATAM Pass</a></li>
                                <li><a>Vamos / LATAM</a></li>
                                <li><a>Paquetes, hoteles y más</a></li>
                                <li><a>LATAM Corporate</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>síguenos</h4>
                            <div className="social-links">
                                <a><i className="fab fa-facebook-f"></i></a>
                                <a><i className="fab fa-twitter"></i></a>
                                <a><i className="fab fa-instagram"></i></a>
                                <a><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Nuestra app en tu teléfono</h4>
                            {/* <div className="plataformas">
                                <a><img src="/images/partials/as.jpeg" alt=""></a>
                                <a><img src="/images/partials/gp.png" alt=""></a>
                            </div>  */}
                        </div>
                    </div>

                    <div className="footer-footer">
                        <h3 className="ff-content">Copyright © 2022-2022 DigitalTourism S.R.L.</h3>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
