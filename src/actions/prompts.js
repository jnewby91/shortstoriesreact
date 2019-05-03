import {API_BASE_URL} from '../config'; 
import { fetchSingleUserStoriesError } from './stories';

//fetch to get all prompts 

export const FETCH_PROMPTS_REQUEST = 'FETCH_PROMPTS_REQUEST'; 
export const fetchPromptsRequest = () => ({
    type: FETCH_PROMPTS_REQUEST
    
}); 

export const FETCH_PROMPTS_SUCCESS = 'FETCH_PROMPTS_SUCCESS'; 
export const fetchPromptsSuccess = (data) => ({
    type: FETCH_PROMPTS_SUCCESS,
    data
}); 

export const FETCH_PROMPTS_ERROR = 'FETCH_PROMPTS_ERROR'; 
export const fetchPromptsError = (error) => ({
    type: FETCH_PROMPTS_ERROR,
    error
}); 


//create a writing prompt 

export const CREATE_PROMPT_REQUEST = 'CREATE_PROMPT_REQUEST'; 
export const createPromptRequest = () => ({
    type: CREATE_PROMPT_REQUEST
}); 

export const CREATE_PROMPT_SUCCESS = 'CREATE_PROMPT_SUCCESS'; 
export const createPromptSuccess = (data) => ({
    type: CREATE_PROMPT_SUCCESS,
    data
}); 

export const CREATE_PROMPT_ERROR = 'CREATE_PROMPT_ERROR'; 
export const createPromptError = (error) => ({
    type: CREATE_PROMPT_ERROR,
    error
}); 

export const GO_TO_NEXT_PROMPT = 'GO_TO_NEXT_PROMPT';
export const goToNextPrompt = () => {
    const payload = 1; 
    return {
        type: GO_TO_NEXT_PROMPT, 
        payload
    }
}

export const GO_TO_LAST_PROMPT = 'GO_TO_LAST_PROMPT';
export const goToLastPrompt = () => {
    const payload = 1; 
    console.log('payload is here:',payload)
    return {
        type: GO_TO_LAST_PROMPT, 
        payload
    }
}

export const fetchPrompts = () => dispatch => {
    dispatch(fetchPromptsRequest()); 
    return fetch(`${API_BASE_URL}/api/prompts`,{
        method: 'GET'
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject 
            (res.statusText)
        }
        return res.json(); 
    }).then(prompts => dispatch(fetchPromptsSuccess(prompts)))
    .catch(err => (fetchSingleUserStoriesError(err)))
}


/**
 * I need to fix the bottom action to model createAStoryaction
 */
export const createAPrompt = (title,scenario,category) => (dispatch, getState) => {
    dispatch(createPromptRequest());
    let authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/prompts`, 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            title, 
            scenario, 
            category 
        })
    }).then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText)
            }
            return res.json(); 
        }).then(prompts => dispatch(createPromptSuccess()))
        .catch(err => dispatch(createPromptError(err)))
    }
