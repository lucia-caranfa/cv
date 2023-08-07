import React from 'react'
import "./Skills.css"

function Skills({ name = "name por defecto",
  status = "status por defecto", image }) {
  return (
    <div className="skills">
      <img src={image}></img>
      <h2>{name}</h2>
      <h4>{status}</h4>
    </div>
  )
}

export default Skills;