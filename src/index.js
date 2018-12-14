import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Hello() {
    let phrase = "Slider";
    return(
        <h1>Hello! Here will be a {phrase}.</h1>
    )
}

ReactDOM.render(<Hello />, document.getElementById('root'));


serviceWorker.unregister();
