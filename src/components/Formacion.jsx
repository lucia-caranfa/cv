import React from 'react'
import "./Formacion.css"

function Formacion({ title = "titulo por defecto",
  description = "descripcion por defecto",
  year = "anio por defecto",
  institution = "institucion por defecto" }) {
  return (
    <div className="formacion">
      <h2>{title}</h2>
      <h3>{year}</h3>
      <p>{description}</p>
      <h4>{institution}</h4>
    </div>
  )
}

export default Formacion;