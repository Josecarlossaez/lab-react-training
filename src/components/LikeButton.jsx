import React from 'react'
import {useState} from "react"
 const colorArr = ['purple','blue','green','yellow','orange','red']

function LikeButton() {
    const [like, setLike] = useState(0)
  let colorLike = ""
    const addOneLike = () => {
        setLike(like + 1)
       
        for (let i=0; i < colorArr.length; i++){
            colorLike= colorArr[i] +1
        }
        return colorLike
    }
  
  return (
    <div>
        <button onClick={addOneLike} style={{backgroundColor:`${colorLike}`}} >Likes:{like}</button>
    </div>
  )
}

export default LikeButton