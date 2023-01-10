import React from 'react';
import {Header} from "./Header";
import {Content} from "./Content";
import './layout.module.css'
import {Statistic} from "./Statistic";
import {Route, Routes} from "react-router-dom";

export function Layout() {
    return (
        <div className='layout'>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Content/>}/>
                <Route path={'statistic'} element={<Statistic/>}/>
            </Routes>
        </div>
    );
}
