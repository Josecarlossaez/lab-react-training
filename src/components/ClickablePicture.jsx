import React from 'react'
import {useState} from "react"
import img from "../assets/images/maxence.png"
import imgClicked from "../assets/images/maxence-glasses.png"

function ClickablePicture(props) {
    const [imageClick, setImageClick] = useState(img)
    
    const imageChange = () => {
        setImageClick(imgClicked)
       

    }
  return (
    <div>
    <button type="button" onClick={imageChange}>
        <img  src={imageClick} alt=""  width="100px"/>
       
      

    </button>
    </div>
  )
}

export default ClickablePicture