import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import './scss/todo.scss';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer); 

render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
