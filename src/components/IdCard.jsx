import React from 'react'
import '../App.css';

function IdCard(props) {
console.log(props)
let date = props.birth.toString()
console.log(date)

  return (
    
    <div class="card">
    <div>
        <img src={props.picture} alt="picture" />
    </div>
       <div class="datos-id">
        <p>First name: <span>{props.firstName}</span></p> 
        <p>Last Name: <span>{props.lastName}</span> </p> 
        <p>Gender: <span>{props.gender}</span></p> 
        <p>Height: <span>{props.height}</span></p> 
        <p>Birth: <span>{props.birth.toDateString()}</span></p> 
      
       </div> 
    </div>
 
  )
}

export default IdCard