import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from "./redux/store";


const app = <Router basename={"/testHotel"}>
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
</Router>

ReactDOM.render(
    app,
    document.getElementById('root')
);

