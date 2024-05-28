import React, { useState } from 'react';
import Item from './Item'

const BuyerLogin = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submit ,setSubmit]=useState(false);
 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    setSubmit(true); 
  };

  if (submit) {
    
    return(
        <><Item /></>
    )
        
       
    
  }

 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuyerLogin;
