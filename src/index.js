import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 
'react-router-dom';
import store from './store'; 
import {Provider} from 'react-redux'; 

import './index.css';
import App from './App';
import Stories from './components/stories'
import CreateStory from './components/createStoryPage'
import * as serviceWorker from './serviceWorker';
import LogInPage from './components/LogInPage';
import {SignUpPage} from './components/SignUpPage';
import Navigator from './components/nav';
import submitPromptPage from './components/submitPromptPage';
import editStoryPage from './components/editStoryPage';

ReactDOM.render(
    <Router>
        <div>
            <Provider store={store}>
                <Route exact path='/' component={App}/>
                <Route exact path='/stories-page' component={Stories}/>
                <Route exact path='/create-a-story-page' component={CreateStory}/>
                <Route exact path='/submit-writing-prompt' component={submitPromptPage}/>
                <Route exact path='/edit-story-page' component={editStoryPage}/>
                <Route exact path='/sign-up' component={SignUpPage}/>
                <Route exact path='/log-in' component={LogInPage}/>
            </Provider>
        </div>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
