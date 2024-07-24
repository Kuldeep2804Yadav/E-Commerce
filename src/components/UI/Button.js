import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <button className={`button ${props.className}`}>{props.title}</button>
  )
}

export default Button