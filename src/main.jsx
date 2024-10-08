import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SideBarPageContext } from './Context/SideBarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideBarPageContext>
      <App />
    </SideBarPageContext>
  </React.StrictMode>
);
