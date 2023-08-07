import React from 'react'
import "./Datos.css"

function Datos() {
  return (
    <div className='division-datos'>
      <ul>
        <div>
          <img className="iconos" src="./images/ubicacion.png"></img>
          <li>CABA, Buenos Aires, Argentina</li>
        </div>
        <div>
          <img className="iconos" src="./images/linkedin.png"></img>
          <li><a href="https://www.linkedin.com/in/lucia-caranfa/">linkedin.com/in/lucia-caranfa/</a></li>
        </div>
        <div>
          <img className="icono-cel" src="./images/celular.png"></img>
          <li>+54 (11)6177-4391</li>
        </div>
        <div>
          <img className="iconos" src="./images/mail.png"></img>
          <li><a href="mailto:luciacaranfa@gmail.com">luciacaranfa@gmail.com</a></li>
        </div>
      </ul>
    </div>
  )
}

export default Datos;