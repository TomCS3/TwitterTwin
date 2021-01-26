import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets';

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

const tweetFeedEl = document.getElementById('twittertwin-feed')
if (tweetFeedEl) {
  ReactDOM.render(
    e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll(".twittertwin-detail")

tweetDetailElements.forEach(container => {
  ReactDOM.render(
    e(TweetDetailComponent, container.dataset), 
    container);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
