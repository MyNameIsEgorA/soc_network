import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Random blL(data) hard-wrote. Must be there or get from Redux (TODO). Don't move it to the bottom
let people = [
  { id: '1', name: 'Sasha', },
  { id: '2', name: 'Masha', },
  { id: '3', name: 'Pasha', },
  { id: '4', name: 'Andruha', },
]

// Random blL(data) hard-wrote. Must be there or get from Redux (TODO). Don't move it to the bottom
let messages = [
  { id: "1", message: "Ayooo" },
  { id: "2", message: "Wassup Man!" },
  { id: "3", message: "Maincraft is my life!!!" },
  { id: "4", message: "No, man, red panties isn't gay" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messages} people={people} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
