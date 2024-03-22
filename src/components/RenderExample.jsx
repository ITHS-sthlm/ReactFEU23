const RenderExample = () => {
    //En boolean variabel för villkorlig rendering
    const isLoggedIn = true;

    /* En enkel array att utgå ifrån */
    const fruits = ['Apple', 'Banana', 'Orange'];

    return (
        <div className="wrapper">
            <h1>Villkorlig rendering & Listor</h1>
            {isLoggedIn ? (
                <ul>
                    {' '}
                    {fruits.map((fruit, id) => (
                        <li key={id}>{fruit}</li>
                    ))}
                </ul>
            ) : (
                <p>Vänligen logga in för att se innehållet</p>
            )}
        </div>
    );
};

export default RenderExample;
