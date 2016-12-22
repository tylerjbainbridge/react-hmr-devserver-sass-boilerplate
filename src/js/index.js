import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
require('../style/base.scss');

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

render();

if (module.hot) { //must be the "root" file.
    module.hot.accept('./App', render);
}
