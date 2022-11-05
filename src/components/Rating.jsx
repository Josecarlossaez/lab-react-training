import React from 'react'



function Rating(props) {
    console.log(props.children)
    // let emptyStart = "☆"
    let fillStart = "★".repeat(Math.round(props.children)) + "☆".repeat(5-Math.round(props.children))
    // let ratingStart = fillStart + emptyStart.slice(-Math.round(props.children))
    console.log(fillStart)
   
  return (
    <div>
   <p>{fillStart}</p>
    </div>
  )
}

export default Rating