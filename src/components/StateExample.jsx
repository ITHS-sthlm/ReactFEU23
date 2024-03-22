import { useState } from 'react';

const StateExample = () => {
    /* Kommer att skapa en variabel som har ett tillstånd som heter "count" */
    /* useState hook  skapar en lokal statevariabel och en funktion som kan uppdatera denna */

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>State Exempel</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Öka</button>
            <button onClick={() => setCount(count-1)}>Minska</button>
        </div>
    )

};

export default StateExample;
