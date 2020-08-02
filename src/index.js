import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
// import Component1 from './Component1'
import App from './Containers/App';
// ./App means ./App.js
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App/>,document.getElementById('root')
);
serviceWorker.unregister();
