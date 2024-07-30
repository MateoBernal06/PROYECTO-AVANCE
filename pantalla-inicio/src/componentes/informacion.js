import React from "react";
import Bus from '../imagenes/bus.jpg';

function Informacion(){
    return(
        <div className="informacion">
            <div className="bus">
                <img src={Bus} className="imagen_bus"></img>
            </div>
            <div className="titulo">
                <h1>Tarjetas electrónicas para autobuses</h1>
            </div>
            <div className="texto">
                <p> La tarjeta electrónica tiene como objetivo brindar un mejor servicio a los ciudadanos que utilizan el transporte público 
                    de autobuses, así el pago lo podrán realizar de manera rápida, ahorrando tiempo y dinero a los usuarios.
                    La tarjeta electrónica también beneficiará con la media tarifa los 365 días del año a las personas con discapacidad,
                    los estudiantes, las personas de la tercera edad y los niños.</p>
                    <br></br>
            </div>
        </div>
    );
}

export default Informacion;


