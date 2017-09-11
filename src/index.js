import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// let message = 'Hello fron inside'
// console.log(message);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
