import React, { useContext, useState } from 'react';
import { submitRide } from '../utils/submitRide.ts';
import rideContext from "../context/rideContext.tsx";
import '../styles/form.css';

export default function Form() {
  const context = useContext(rideContext);
  const [input, setInput] = useState({ customer_id: '', origin: '', destination: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateForm = () => {
    if(input.customer_id.length === 0 || input.destination.length === 0 || input.destination.length === 0 ) {
        setErrorMessage('Todos os campos são obrigatórios');
        setInvalidLogin(true);
    }
  }
  
  const handleSubmit = async (event: any) => {
      event.preventDefault();
      const {origin, destination, customer_id} = input;
      const result = await submitRide({customer_id, origin, destination});
      
      console.log(result);
      // context?.setActiveStep(2);
  };
  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidLogin(false);
    const { target } = event;
    setInput({...input, [target.name]: target.value });
  };
  
  return (
      <form onSubmit={ handleSubmit } className="request-ride-form">
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
            <span className="text">Endereço de Origem *</span>
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
        className="request-ride-button"
      >
        Solicitar Viagem
      </button>
      </form>
      
  )
}