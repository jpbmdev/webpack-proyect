import React from 'react';
import PizzaCSS from './Pizza.module.css';

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({pizza}) => {
    return (
        <li className={PizzaCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
        </li>
    );
}

export default Pizza;