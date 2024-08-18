import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import TokenContextProvider from './Components/Context/Token';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenContextProvider>
    <App />
    </TokenContextProvider>
    
  </React.StrictMode>

);

reportWebVitals();
