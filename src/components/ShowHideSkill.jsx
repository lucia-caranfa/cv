import React, { useState } from 'react'
import Skills from './Skills';
import habilidades from '../data/habilidades';
import "./ShowHide.css"

function ShowHideSkill() {
    const [show, setShow] = useState(false);
    const handleClick = (event) => {
        setShow(!show);
    };

    const listaHabilidades = habilidades.map((h) => {
        return <Skills name={h.nombre} status={h.estado} image={h.imagen} key={h.key} />
    });


    return (
        <div>
            <button onClick={handleClick}>{show ? "-" : "+"} Info</button>
            {show && <div>
                <div className="container">
                    {listaHabilidades}
                </div>
            </div>}
        </div>
    );
}

export default ShowHideSkill;