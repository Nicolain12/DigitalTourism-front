import React from 'react';

function Header() {
    return (
        <div className="App-header">
            <header className="App-header">
                <div className="div-logo">
                    <a>
                        <img className="logo-img" src="/images/partials/logo.jpeg" alt="Imagen Logo"></img>
                    </a>
                </div>
                <div className="div-pages">
                    <ul type="none">
                        <li><a>Vuelos</a></li>
                        <li><a>Hoteles</a></li>
                        <li><a>Paquetes</a></li>
                        <li><a>Crear Producto</a></li>
                    </ul>
                </div>

                <div className="div-links">
                    <div className="div-i-1">
                        <a><i className="fa-solid fa-plane-up"></i></a>
                    </div>
                    <div className="div-i-2">
                        <a><i className="fa-solid fa-user"></i></a>
                        <div className="div-i-2">
                            <a><i className="fa-solid fa-user"></i></a>
                        </div>
                    </div>
                    <div className="burger-menu">
                        <a><i className="fas fa-bars"></i></a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;



