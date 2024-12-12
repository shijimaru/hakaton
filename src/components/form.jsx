import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [recipient, setRecipient] = useState('');
    const [interests, setInterests] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ recipient, interests, price });
    };

    // Массив вариантов интересов
    const interestsOptions = [
        'Бытовая техника',
        'Красота и Здоровье',
        'Музыка',
        'Компьютеры',
        'Авто'
    ];

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Кому вы хотите сделать подарок?</label>
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
            </div>
            <div>
                <label>Какие интересы у этого человека?</label>
                <select
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                >
                    <option value="">Выберите интерес</option>
                    {interestsOptions.map((interest) => (
                        <option key={interest} value={interest}>
                            {interest}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Цена которая вас устроит?</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default Form;