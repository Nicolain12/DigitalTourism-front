import React from 'react';
import './loggin.css';

function Loggin() {
    return (
        <div className="App-loggin">
            <main>

                <form className="form-login" id="form-login">

                    <h4>Iniciar sesión </h4>

                    <h6 className="error-msg" id="errors-email-loggin"></h6>

                    <input className="controls" value="" type="email" name="email" id="email" placeholder="Ingrese su Correo"></input>

                    <h6 className="error-msg" id="errors-password-loggin"></h6>

                    <input className="controls" type="password" name="password" id="password" placeholder="Ingrese su Contraseña"></input>
                    <label for="remember">
                        <input id="remember" type="checkbox" name="remember" > Recordarme </input>
                    </label>
                    <div className="button-loggin-div">
                        <button id="button-loggin" className="botons">Iniciar sesion</button>
                    </div>
                    <p> ¿Se te olvidó tu contraseña?<a href="#"> Click Aqui</a></p>

                </form>

            </main>
        </div>
    )
}

export default Loggin;
