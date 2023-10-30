import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from "./Redux/State";
import store from "./Redux/State";


export let rerenderEntireTreeIndex=()=>{

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App data={Data.getData()}
                 dispatch = {Data.dispatch.bind(Data)}
                 

            />
        </React.StrictMode>
    );
}
rerenderEntireTreeIndex(Data.getData());
Data.subscribe(rerenderEntireTreeIndex);


reportWebVitals();







