import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const app = ReactDOM.createRoot(
    document.getElementById("weeklychef-app") as HTMLElement
);

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
