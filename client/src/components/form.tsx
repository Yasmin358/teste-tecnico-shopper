import React, { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState({ customer_id: '', origin: '', destination: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateForm = () => {
    if(input.customer_id.length === 0 || input.destination.length === 0 || input.destination.length === 0 ) {
        setErrorMessage('* Este Campo é obrigatório');
        setInvalidLogin(true);
    }
  }
  
  const handleSubmit = (event: any) => {
      event.preventDefault();
      validateForm();
  };
  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInput({ ...input, [target.name]: target.value });
  };
  
  return (
      <form onSubmit={ handleSubmit } className="match-settings-form">
        {invalidLogin && (
            <h4 className='error'>{errorMessage}</h4>
        )}
        <label htmlFor="costumer_id" className="label-id">
            <span className="text">ID *</span>
            <input
              name="costumer_id"
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