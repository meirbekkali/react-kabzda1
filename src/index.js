import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";




export let rerenderEntireTreeIndex=()=>{

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
}
 rerenderEntireTreeIndex(store.getState());
// store.subscribe(rerenderEntireTreeIndex);


reportWebVitals();







