import { useState } from "react";
import "./Flower.css";

import flower from "./assets/flower/flower.svg";
import petal from "./assets/flower/petal.svg";

function Flower() {
    const [petalCount, setPetalCount] = useState(0);
    const [pluckedCount, setPluckedCount] = useState(0);
    const [message, setMessage] = useState("");

    function generatePetal() {
        const randomCount = Math.floor(Math.random() * 8) + 1;
        setPetalCount(randomCount);
        setPluckedCount(0);
        setMessage("");
    }

    function pluckPetal() {
        if (petalCount > 0) {
            const nextPlucked = pluckedCount + 1;
            const newPetalCount = petalCount - 1;
            const result = nextPlucked % 2 === 1 ? "mīl" : "nemīl";

            setPluckedCount(nextPlucked);
            setPetalCount(newPetalCount);
            setMessage(result);
        }
    }

    return (
        <article className="flower">
            <h2>Mīlestības puķe</h2>

            <div className="flower-container">
                <img className="flower-img" src={flower} alt="Mīlestības puķe" />

                {[...Array(petalCount)].map((_, index) => {
                    const angle = (360 / petalCount) * index;
                    const radius = 40; // attālums no centra
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                        <img
                            key={index}
                            src={petal}
                            alt={`Ziedlapiņa ${index + 1}`}
                            className="petal-img"
                            style={{
                                position: "absolute",
                                top: `calc(50% + ${y}px)`,
                                left: `calc(50% + ${x}px)`,
                                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                                transformOrigin: "center center",
                            }}                            
                        />
                    );
                })}
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