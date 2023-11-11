import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import StoreContext from "./Context";



export let rerenderEntireTreeIndex=()=>{

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </React.StrictMode>
    );
}
rerenderEntireTreeIndex(Data.getState());
Data.subscribe(rerenderEntireTreeIndex);


reportWebVitals();







