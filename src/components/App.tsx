import React from "react";
import pizzas from '../data/pizzas.json';
import Pizza from "./Pizza";
import AppCSS from './App.module.css';
import PizzaSVG from "../../svg/pizza.svg";

const App = () => {
    return (
        <div className={AppCSS.container}>
            <div className={AppCSS.header}>
                <PizzaSVG width={120} height={120} />
                <div className={AppCSS.siteTitle}>Delicious Pizza</div>
            </div>
            <ul>
                {
                    pizzas.map((pizza) => (
                        <Pizza
                            pizza={pizza}
                            key={pizza.id}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default App;