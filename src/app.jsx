import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './views/index.jsx';
import {picManager} from "./classes/pic";

function render() {
    ReactDOM.render(
        <App/>
    , document.body);
}

render();