import React, { useState } from 'react';
import Form from './form';
import Results from './result';
import './App.css'

const App = () => {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className='form'>
            <div className='container'>
                <h1>Опрос для выбора подарка</h1>
                {!formData ? (
                    <Form onSubmit={handleFormSubmit} />
                ) : (
                    <Results data={formData} />
                )}
            </div>
        </div>
    );
};

export default App;
