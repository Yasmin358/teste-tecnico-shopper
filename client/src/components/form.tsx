import React, { useContext, useState } from 'react';
// import { submitRide } from '../utils/submitRide.ts';
import rideContext from "../context/rideContext.tsx";


export default function Form() {
  const context = useContext(rideContext);
  const [input, setInput] = useState({ customer_id: '', origin: '', destination: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateForm = () => {
    if(input.customer_id.length === 0 || input.destination.length === 0 || input.destination.length === 0 ) {
        setErrorMessage('* Este Campo é obrigatório');
        setInvalidLogin(true);
    }
  }
  
  const handleSubmit = async (event: any) => {
      event.preventDefault();
      validateForm();
      /* const {origin, destination} = input;
      const result = await submitRide({ origin, destination});
      
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googlekey}`)
      
      .then((responseText) => {
          return responseText.json();
      })
      .then(jsonData => {
          console.log(jsonData);
      })
      .catch(error => {
          console.log(error);

      })
      
      
      console.log(result);  */ 
      context?.setActiveStep(2);
  };
  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInput({...input, [target.name]: target.value });
  };
  
  return (
      <form onSubmit={ handleSubmit } className="match-settings-form">
        {invalidLogin && (
            <h4 className='error'>{errorMessage}</h4>
        )}
        <label htmlFor="customer_id" className="label-id">
            <span className="text">ID *</span>
            <input
              name="customer_id"
              type="text"
              onChange={ handleInput }
              className="input-id"
            />
        </label>
      <label htmlFor="origin" className="label-origin">
            <span className="text">Endereço de Origen *</span>
            <input
              name="origin"
              type="text"
              onChange={ handleInput }
              className="input-origin"
            />
      </label>
      <label htmlFor="destination" className="label-destination">
            <span className="text">Endereço de Destino *</span>
            <input
              name="destination"
              type="text"
              onChange={ handleInput }
              className="input-destination"
            />
      </label>
      <button
        type="submit"
        name="request-ride"
      >
        Solicitar Viagem
      </button>
      </form>
      
  )
}