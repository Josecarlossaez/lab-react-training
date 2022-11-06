import React from 'react'
import {useState} from "react"
import img from "../assets/images/maxence.png"
import imgClicked from "../assets/images/maxence-glasses.png"

function ClickablePicture(props) {
    const [imageClick, setImageClick] = useState(img)
    // const [imageGlassIsShowing, setImageGlassIsShowing] = useState(false)
    
    const imageChange = () => {
       


              if (imageClick === img) {
            setImageClick (imgClicked) 
              
            
          } else {
            setImageClick (img)
          }
       
  }
  return (
    <div>
  
        <img onClick={imageChange} src={imageClick}   alt=""  width="100px" padding="0px"/>
       
      

   
    </div>
  )

}

export default ClickablePicture