import {Layout} from "./Layout";
import './main.global.css'
import {BrowserRouter} from "react-router-dom";


function App() {
    console.log('render App')
    return (
        <BrowserRouter> <Layout/></BrowserRouter>
    );
}

export default App