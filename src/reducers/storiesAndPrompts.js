import * as storyActions from '../actions/stories'; 
import * as promptActions from '../actions/prompts';

/**
 * ?: Figure out what I should display in initial state after an action is called
 */
const initialState = {
    currentStory: [], 
    storyCollection: [],
    prompts: [],
    currentPromptIndex: 0,      
    currentPrompt: {title: 'loading...', scenario: 'loading...'}, 
    loading: false, 
    feedback: null, 
    error: null 
}; 


export default function reducer(state = initialState, action) {
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
            storyCollection: action.data
        })
    }

    else if (action.type === storyActions.FETCH_USER_STORIES_ERROR) {
        return Object.assign({}, state, {
            loading: false, 
            // error: storyActions.error
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
            // currentStory: storyActions.currentStory
    })
}
    else if (action.type === storyActions.CREATE_USER_STORY_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            feedback: null, 
            error: null
    })
}
else if (action.type === storyActions.CREATE_USER_STORY_SUCCESS) {
    return Object.assign({}, state, {
        loading: false,
        storyCollection: [...state.storyCollection,
             action.data
        ]
    })
}

else if (action.type === storyActions.CREATE_USER_STORY_ERROR) {
    return Object.assign({}, state, {
        loading: false, 
        error: action.error
    })
}

else if (action.type === promptActions.FETCH_PROMPTS_REQUEST) {
    return Object.assign({}, state, {
        loading: true,
        feedback: null, 
        error: null
    })
}

else if (action.type === promptActions.FETCH_PROMPTS_SUCCESS) {
    return Object.assign({}, state, {
        loading: false,
        prompts: action.data,
        currentPrompt: action.data[state.currentPromptIndex]  
    })
}

else if (action.type === promptActions.FETCH_PROMPTS_ERROR){
    return Object.assign({}, state, {
        loading: false,
        error: action.error
    })
}

else if (action.type === promptActions.GO_TO_NEXT_PROMPT){
    const newCurrentPromptIndex = state.currentPromptIndex + action.payload
    if(newCurrentPromptIndex < state.prompts.length ) {
        return Object.assign({}, state, {
            currentPromptIndex: newCurrentPromptIndex,
            currentPrompt: state.prompts[newCurrentPromptIndex]
        })
    }
}

 
else if (action.type === promptActions.GO_TO_LAST_PROMPT){
    const newCurrentPromptIndex = state.currentPromptIndex - action.payload
    if(newCurrentPromptIndex >= 0) {
        return Object.assign({}, state, {
            currentPromptIndex: newCurrentPromptIndex,
            currentPrompt: state.prompts[newCurrentPromptIndex]
        })
    }
}

    return state; 
}