import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const name = 'Josh Perez';

interface user {
  firstName: String,
  lastName: String
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}


function formatName(user:user){
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user:user) {
  if(!user){
    return <h1>Hello, {formatName(user)}</h1>
  } else {
    return <h1>Hello, Stranger.</h1>
  }
}

const element = getGreeting(user);

root.render(element)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
