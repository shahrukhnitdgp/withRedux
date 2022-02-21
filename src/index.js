import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {formReducer} from "../src/Redux/Reducers";
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store =createStore(formReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


