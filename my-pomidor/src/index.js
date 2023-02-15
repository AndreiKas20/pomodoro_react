import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const container = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.hydrateRoot(container, <App />);
root.render(<App/>)