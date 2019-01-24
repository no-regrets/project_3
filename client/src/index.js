// // import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { makeMainRoutes } from './routes';


// const routes = makeMainRoutes();

// ReactDOM.render(
//     routes,
//     document.getElementById('root')
//   );
  
import ReactDOM from "react-dom";
import { makeMainRoutes } from "./routes";
import * as serviceWorker from "./serviceWorker";
const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("root"));
serviceWorker.unregister();
