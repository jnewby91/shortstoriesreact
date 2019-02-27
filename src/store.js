import {createStore, combineReducers} from 'redux'; 
import {reducer as formReducer} from 'redux-form'; 
import thunk from 'redux-thunk'; 
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStor(
    combineReducers({
    form: formReducer, 
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