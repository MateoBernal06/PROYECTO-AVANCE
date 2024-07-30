
import React from "react";
import Redes from '../imagenes/redes.jpg'

function Pie(){
    return(
        <div className="pie">
            <div className="pie_uno">
                Siguenos<br></br>
                <img className="redes" src={Redes}></img>
            </div>
            <div className="pie_dos">
                AV Quito - Parque central<br></br><br></br>
                © 2024 GAD Municipal. Política de privacidad / Términos de Uso
            </div>
            <div className="pie_tres">
                Contactanos<br></br>
                (02)-3746046
            </div>
            <div className="pie_cuatro">
                8
            </div>
        </div>
    );
}

export default Pie;