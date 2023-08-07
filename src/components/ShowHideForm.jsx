import React, { useState } from 'react'
import Formacion from './Formacion';
import estudios from '../data/estudios';
import Autodidacta from './Autodidacta';
import autodidacta from '../data/autodidacta';
import "./ShowHide.css"

function ShowHideForm() {
    const [show, setShow] = useState(false);
    const handleClick = (event) => {
        setShow(!show);
    };

    const listaEstudios = estudios.map((e) => {
        return <Formacion title={e.title}
            description={e.description}
            year={e.year}
            institution={e.institution}
            key={e.key} />
    });

    const listaAutodidacta = autodidacta.map((a) => {
        return <Autodidacta curso={a.curso} years={a.years} web={a.web} key={a.key}/>
    });


    return (
        <div>
            <button onClick={handleClick}>{show ? "-" : "+"} Info</button>
            {show && <div><h2 className="titulo">CERTIFICADA</h2>
                <div className="container">
                    {listaEstudios}
                    <div>
                        <h2 className="titulo">AUTODIDACTA</h2>
                        <div className="container">
                            {listaAutodidacta}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default ShowHideForm;