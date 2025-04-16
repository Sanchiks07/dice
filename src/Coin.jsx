import { useState } from "react";
import "./Coin.css";

import coin1 from "./assets/coin/happy-bitcoin.svg";
import coin2 from "./assets/coin/heart-bitcoin.svg";

const coinImages = [coin1, coin2];

function Coin() {
    const [coinValue, setCoinValue] = useState(1);

    function flipCoin() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber);
    }
    
    return (
        <article className="coin">
            <h2>Metamais Bitcoin</h2>
            <img
                src={coinImages[coinValue - 1]}
                alt={"Metamais bitcoin " + coinValue}
                className="coin-img"
            />
            <br />
            <button onClick={flipCoin}>Mest</button>
        </article>
    ) 
}

export default Coin;