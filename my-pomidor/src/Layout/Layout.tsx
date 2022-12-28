import React from 'react';
import {Header} from "./Header";
import {Content} from "./Content";
import './layout.css'

export function Layout() {
    return (
        <div className='layout' >
            <Header></Header>
            <Content></Content>
        </div>
    );
}
