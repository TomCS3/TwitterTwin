import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TweetsComponent} from './tweets';

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}
const e = React.createElement
const tweetsEl = document.getElementById('twittertwin')
if (tweetsEl) {
  ReactDOM.render(
    e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
