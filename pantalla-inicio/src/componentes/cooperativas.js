import React from "react";
import uno from '../imagenes/cooperativas/uno.png';
import dos from '../imagenes/cooperativas/dos.jpg';
import tres from '../imagenes/cooperativas/tres.jpg';
import cuatro from '../imagenes/cooperativas/cuatro.png';
import cinco from '../imagenes/cooperativas/cinco.png';

function Cooperativas(){
    return(
        <div className="cooperativas">
            <div className="titulo_co">
                <h2>Cooperativas asociadas </h2>
            </div>
            <div className="a">
                <img className="logos" src={uno}></img>
            </div>
            <div className="b">
                <img className="logos" src={dos}></img>
            </div>
            <div className="c">
                <img className="logos" src={tres}></img>
            </div>
            <div className="d">
                <img className="logos" src={cuatro}></img>
            </div>
            <div className="e">
                <img className="logos" src={cinco}></img>
            </div>
        </div>
    );
}

export default Cooperativas;