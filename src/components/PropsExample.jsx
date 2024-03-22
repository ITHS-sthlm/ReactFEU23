/* Om vi ej använder Typescript ska vi använda PropTypes vid props */
import { PropTypes } from 'prop-types';

const PropsExample = (props) => {
return (
    <div>
        <h1>Props Exempel</h1>
        <p>Hej, {props.firstname}! </p>
        <p>Din ålder är: {props.age}! </p>

    </div>
)
};

//Specificera propstyper för vår komponent ovan
PropsExample.propTypes = {
    firstname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired

}

export default PropsExample;
