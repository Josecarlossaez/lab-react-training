import React from 'react'

function Greetings(props) {
    console.log(props)
 
if(props.lang === "de"){
    return <p class="saludo">Hallo {props.children }</p>
} if(props.lang === "en"){
    return <p class="saludo">Hallo {props.children }</p>
} if(props.lang === "es"){
    return <p class="saludo">Hallo {props.children }</p>
} if(props.lang === "fr"){
    return <p class="saludo">Hallo {props.children }</p>
} 
 
}

export default Greetings