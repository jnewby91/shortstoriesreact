import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; 
import {reducer as formReducer} from 'redux-form'; 
import thunk from 'redux-thunk'; 
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import reducer from './reducers/storiesAndPrompts';
import { setAuthToken, refreshAuthToken } from './actions/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    combineReducers({
        form: formReducer, 
        storeAndPrompt:  reducer, 
        auth: authReducer,
    }), 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store; 