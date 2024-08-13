
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
                <a href="https://registro-delta.vercel.app/"><button className='boton' id='boton_registro' type='subtime'>Registro</button></a>
            </div>
            <div className="boton_b">
                <a href="https://interfaces-login-mt.vercel.app/"> <button className='boton' id='boton_iniciar' type='subtime'>Iniciar sesion</button></a>
            </div>
            <div className="color_b">5</div>
        </div>
    );
}

export default Menu;
