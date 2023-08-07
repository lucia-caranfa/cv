import React from 'react'
import './Autodidacta.css'

function Autodidacta({ curso = "curso por defecto",
  years = "anio por defecto",
  web = "web por defecto" }) {
  return (
    <div className="autodidacta">
      <h2>{curso}</h2>
      <h3>{years}</h3>
      <h4>{web}</h4>
    </div>
  )
}

export default Autodidacta;