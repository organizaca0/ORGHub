import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
declare module "*.jpg"
declare module "*.png"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);

