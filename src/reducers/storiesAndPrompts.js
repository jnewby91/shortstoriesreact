import * as storyActions from '../actions/stories'; 
import * as promptActions from '../actions/prompts';

/**
 * ?: Figure out what I should display in initial state after an action is called
 */
const initialState = {
    currentStory: [], 
    storyCollection: [],
    prompts: [],      
    currentPrompt: [], 
    loading: false, 
    feedback: null, 
    error: null 
}; 


export default function reducer(state =initialState, action) {
    if (action.type === storyActions.FETCH_USER_STORIES_REQUEST){
        return Object.assign({}, state, {
            loading: true, 
            feedback: null, 
            error: null
        })
    }

    else if (action.type === storyActions.FETCH_USER_STORIES_SUCCESS) {
        return Object.assign({}, state, {
            loading: false, 
            storyCollection: storyActions.storyCollection
        })
    }

    else if (action.type === storyActions.FETCH_USER_STORIES_ERROR) {
        return Object.assign({}, state, {
            loading: false, 
            error: storyActions.error
        })
    }

    else if (action.type === storyActions.FETCH_SINGLE_USER_STORY_REQUEST) {
        return Object.assign({}, state, {
            loading: true, 
            feedback: null, 
            error: null
        })
    }

    else if (action.type === storyActions.FETCH_SINGLE_USER_STORY_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentStory: storyActions.currentStory
    })
}

    return state; 
}