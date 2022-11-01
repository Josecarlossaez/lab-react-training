import React from 'react'

function Random(props) {
    console.log("random",props)
    let randomNum = Math.floor(Math.random(props.min)* props.max)
  return (
    <h3 style={{border:"2px solid"}}>Random value between {props.min} and {props.max} => {randomNum}</h3>
  )
}

export default Random