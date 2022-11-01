import React from 'react';
import visa from "../assets/images/visa.png"

function CreditCard(props) {
  console.log(props);

  return (
    <div class="raw-item">
      <div
        style={{
          backgroundColor: `${props.bgColor}`,
          width: '400px',
          height: '200px',
        }}
      >
      <img src={visa} alt="visa" style={{width:"50px"}} />
        <h3>{props.number}</h3>
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
