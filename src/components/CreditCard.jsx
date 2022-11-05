import React from 'react';
import visa from "../assets/images/visa.png"

function CreditCard(props) {
  console.log(props);




 let codeNumber= "*".repeat(props.number.length-4)
    
 
  
  let codeAll = codeNumber + props.number.slice(-4)
  console.log("codeAll",codeAll)
  console.log("codeNumber",codeNumber)
  



  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <div
        style={{
          backgroundColor: `${props.bgColor}`,
          width: '400px',
          height: '200px',

        }}
      >
      <img src={visa} alt="visa" style={{width:"50px"}} />
      { 
      
      }
        <h3>{codeAll}</h3>
        <div>
          <p>expires:{props.expirationMonth}/{props.expirationYear}</p>
          <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
