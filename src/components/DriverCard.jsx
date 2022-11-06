import React from 'react'


function DriverCard(props) {
    let fillStart = "★".repeat(Math.round(props.rating)) + "☆".repeat(5-Math.round(props.rating))
    console.log(props)
  return (
    <div style={{display:"flex" ,justifyContent:"center"}}>
        <div>
            <img src={props.img} alt="" width="100px"/>
        </div>
        <div >
           <div>
            <h3>{props.name}</h3>
            <p>{fillStart}</p>
            </div>
           <div>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>

           </div>
        </div>
    </div>
  )
}

export default DriverCard