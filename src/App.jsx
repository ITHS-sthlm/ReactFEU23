import EventExample from './components/EventExample';
import FormExample from './components/FormExample';
import NavBar from './components/NavBar';
import PropsExample from './components/PropsExample';
import RenderExample from './components/RenderExample';
import StateExample from './components/StateExample';

function App() {
    return (
        <div>
            <NavBar />
            <StateExample />
            <PropsExample firstname={'Richard'} age={29} />
            <EventExample/>
            <RenderExample/>
            <FormExample/>
        </div>
    );
}

export default App;
