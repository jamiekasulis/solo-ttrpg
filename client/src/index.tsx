import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './SampleApp/App';
import reportWebVitals from './reportWebVitals';
import OracleTable from './oracle/OracleTable';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OracleTable title='Admirable traits' elements={['Loyalty', 'Kindness', 'Smells nice']} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
