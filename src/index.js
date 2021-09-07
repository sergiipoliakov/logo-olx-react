import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ShowModal from './context/ShowModal/ShowModal';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowModal>
        <App />
      </ShowModal>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
