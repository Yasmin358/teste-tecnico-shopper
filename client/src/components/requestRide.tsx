import * as React from 'react';
import Form from './form.tsx';
import '../styles/requestRide.css';

export default function RequestRide() {
    return (
        <section className='request-ride-container'>
            <h1>TaxiApp</h1>
            <Form />
        </section>
    );
}