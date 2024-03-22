/* När vi arbetar med formulär så har vi alltid något slags tillståndhantering
att arbeta med... */
import { useState } from 'react';

const FormExample = () => {
    /* useState som tar in ALL data från ett formulär (form) och lagrar i useState
    i form av ett objekt */
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    /* Lyssnar på eventet (all data som anges i formuläret nedan) och tar in
    värdena från dessa, separerar dom fron varandra med "..." och lagrar detta
    som nya värden i vår formData variabel, dvs också får det ett nytt tillstånd */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulär ifyllt, här är all data:', formData);
    };

    return (
        <div className="apa">
            <h1>Formulär exempel</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};

export default FormExample;
