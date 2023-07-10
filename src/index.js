import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './resources/scss/index.scss';
import Landscape from './pages/landscape/Landscape';

const App = () => {
  return (
    <div>
      <Landscape />
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
