// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { makeMainRoutes } from './routes';


const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
  );
  