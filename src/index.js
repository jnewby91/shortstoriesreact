import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import AccountPage from './components/accountPage'
import CreateStory from './components/createStoryPage'
import * as serviceWorker from './serviceWorker';
import LogIn from './log-in';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path='/account-page' component={AccountPage}/>
            <Route exact path='/create-a-story-page' component={CreateStory}/>
            <Route exact path='/log-in' component={LogIn}/>
        </div>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
