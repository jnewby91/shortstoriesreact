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

export const createAPrompt = (title, email, scenario, category) => dispatch => {
    dispatch(fetch(`${API_BASE_URL}/api/prompts`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title, 
            email, 
            scenario, 
            category 
        })
        .then(res => {
            if(!res.ok){
                return Promise.reject
                (res.statusText)
            }
            return res.json(); 
        }).then(prompts => dispatch(createPromptSuccess(prompts)))
        .catch(err =>(createPromptError(err =>(createPromptError()))))
    }))
}
