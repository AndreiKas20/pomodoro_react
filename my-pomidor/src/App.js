import {Content} from "./Content";
import {Header} from "./Header";


function App() {
    console.log('render App')
    return (
        <div className="App">
            <Content></Content>
            <Header></Header>

        </div>
    );
}

export default App