import React from 'react';
import './choose.css';

function Choose() {
    return (
        <div className="App-choose">
            <main className="main-choose">
                <div className="choose-main-div">
                    <div className="choose-title">
                        <h3>Elige una opcion</h3>
                    </div>
                    <div className="choose-options">
                        <a href="/register">Register</a>
                        <a href="/loggin">Login</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Choose;
