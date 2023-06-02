import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Oracle } from './oracle/oracle/Oracle';

const data = [
  'Schnauzer', 'Doberman Pinscher', 'Wire Fox Terrier', 'Pekingese', 'Border Collie',
  'Chocolate Labrador', 'German Shepherd', 'Airedale Terrier', 'Bull Terrier', 'Yorkshire Terrier',
  'Poodle', 'Shitzu', 'Rottweiler', 'Golden Retriever', 'Chihuahua',
  'Chow-chow', 'Jindo', 'Pomeranian', 'Dalmatian', 'Wheaton Terrier',
  'Bassett Hound', 'Great Dane'
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Oracle title='Dog breeds' data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
