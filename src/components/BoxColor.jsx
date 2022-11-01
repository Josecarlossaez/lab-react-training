import React from 'react'

function BoxColor(props) {
    console.log(props)
 
    
  return (
    <div style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}}>
        <h2>{props.r},{props.g},{props.b}</h2>
    </div>
  )
}

export default BoxColor