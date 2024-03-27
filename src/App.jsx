import NavBar from './components/NavBar';
import StateExample from './components/StateExample';
import PropsExample from './components/PropsExample';
import EventExample from './components/EventExample';
import RenderExample from './components/RenderExample';
import FormExample from './components/FormExample';
import FormFormikExample from './components/FormFormikExample';
import WebAPI from './components/WebAPI';

const App = () => {
    return (
        <div>
            <NavBar />
            <StateExample />
            <PropsExample name={"Alice"} age={25} /> {/* Använd PropsExample med props */}
            <EventExample/>
            <RenderExample/>
            <FormExample/>
            <FormFormikExample/>
            <WebAPI/>
        </div>
    );
};

export default App;
