
import React from "react";
import Logo from '../imagenes/logo.png'

function Menu(){
    return(
        <div className="menu">
            <div className="color_a"></div>
            <div className="logo">
                <img className="imagen_logo" src={Logo}></img>
            </div>
            <div className="boton_a">
                <button className='boton' id='boton_registro' type='subtime'>Registro</button>
            </div>
            <div className="boton_b">
                <button className='boton' id='boton_iniciar' type='subtime'>Iniciar sesion</button>
            </div>
            <div className="color_b">5</div>
        </div>
    );
}

export default Menu;