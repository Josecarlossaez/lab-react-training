import React from 'react'
import {useState} from "react"
 const colorArr = ['purple','blue','green','yellow','orange','red']

function LikeButton() {
    const [like, setLike] = useState(0)
    const [counterColor, setCounterColor] = useState(0)
  let colorLike = colorArr[counterColor]
 
    const addOneLike = () => {
        setLike(like + 1)
        setCounterColor(counterColor +1)
      if(counterColor > 5){
        setCounterColor(0)
      }else{
        setCounterColor(counterColor +1)
      }
       
    
    }
  
  return (
    <div>
        <button onClick={addOneLike} style={{backgroundColor:`${colorLike}`}} >Likes:{like}</button>
    </div>
  )
}

export default LikeButton