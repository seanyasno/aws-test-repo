import {App} from './components/app/App';
import ReactDOM from 'react-dom/client';
import config from './aws-exports.js';
import {Amplify} from 'aws-amplify';
import React from 'react';
import './index.css';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
