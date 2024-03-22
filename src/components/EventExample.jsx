import { useState } from "react";

const EventExample = () => {
    const [name, setName] = useState('')

    //Funktion för att uppdatera namnet när man skrivit in i input
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    //Funktion för att visa ett hälsningsmeddelande när anv klickar på knappen
    const greetUser = () => {
        alert(`Hej, ${name}`)
    }

    return (
        <div>
            <h1>Event Exempel</h1>
            <input type="text" value={name} onChange={handleNameChange}/>
            <button onClick={greetUser}>Hej</button>
        </div>
    )

}

export default EventExample
