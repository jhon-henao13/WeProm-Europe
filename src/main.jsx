// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css' // ESTA LÍNEA ES VITAL

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter> {/* Envolver App */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { CookieProvider } from './context/CookieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CookieProvider>
          <App />
        </CookieProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);