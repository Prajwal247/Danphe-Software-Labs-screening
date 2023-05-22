import React from 'react'

export default function Button({name, color, onClick}) {
  return (
    <button style={{backgroundColor:color, color:"white"}} onClick={onClick}>{name}</button>
  )
}
