import { useState } from "react";
import "./Flower.css";

import flower from "./assets/flower/flower.svg";
import petal from "./assets/flower/petal.svg";

function Flower() {
    const [petalCount, setPetalCount] = useState(6);
    const [pluckedCount, setPluckedCount] = useState(0);
    const [message, setMessage] = useState("");

    function generatePetal() {
        const randomCount = Math.floor(Math.random() * 6) + 1;
        setPetalCount(randomCount);
        setPluckedCount(0);
        setMessage("");
    }

    function pluckPetal() {
        if (petalCount > 0) {
            const nextPlucked = pluckedCount + 1;
            const nextPetalCount = petalCount - 1;
            const result = nextPlucked % 2 === 1 ? "mīl" : "nemīl";

            setPluckedCount(nextPlucked);
            setPetalCount(nextPetalCount);
            setMessage(result);
        }
    }

    return (
        <article className="flower">
            <h2>Mīlestības puķe</h2>
            <img className="flower-img" src={flower} alt="Mīlestības puķe" />
            
            <div>
                {[...Array(petalCount)].map((_, index) => (
                    <img
                        key={index}
                        src={petal}
                        alt={`Ziedlapiņa ${index + 1}`}
                    />
                ))}
            </div>

            <br />
            <button onClick={generatePetal}>Ģenerēt ziedlapiņas</button>
            <br />
            <button onClick={pluckPetal} disabled={petalCount === 0}>Plūkt ziedlapiņu</button>
            <p><strong>{message}</strong></p>
        </article>
    );
}

export default Flower;