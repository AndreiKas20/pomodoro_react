import {Layout} from "./Layout";
import './main.global.css'
import './colorsTheme.css'
import {BrowserRouter} from "react-router-dom";
import {Notifications} from "react-push-notification";
import arrTaskStore from "./store/arrTaskStore";
import React, {useLayoutEffect} from "react";

function App() {
    console.log('render App')
    useLayoutEffect(() => {
        arrTaskStore.addLocalStorage(JSON.parse(localStorage.acceptArr))
    }, [])
    return (
        <BrowserRouter>
            <Notifications/>
            <Layout/>
        </BrowserRouter>
    );
}

export default App