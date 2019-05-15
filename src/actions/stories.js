import {API_BASE_URL} from '../config'; 

//fetch to get all stories from the user

export const FETCH_USER_STORIES_REQUEST = 'FETCH_USER_STORIES_REQUEST';
export const fetchUserStoriesRequest = () => ({
    type: FETCH_USER_STORIES_REQUEST
}); 

export const FETCH_USER_STORIES_SUCCESS = 'FETCH_USER_STORIES_SUCCESS';
export const fetchUserStoriesSuccess = (data) => ({
    type: FETCH_USER_STORIES_SUCCESS,
    data
}); 

export const FETCH_USER_STORIES_ERROR = 'FETCH_USER_STORIES_ERROR';
export const fetchUserStoriesError = (error) => ({
    type: FETCH_USER_STORIES_ERROR,
    error
}); 

//fetch to get a single short stories from user

export const FETCH_SINGLE_USER_STORY_REQUEST = 'FETCH_SINGLE_USER_STORY_REQUEST';
export const fetchSingleUserStoryRequest = () => ({
      type: FETCH_SINGLE_USER_STORY_REQUEST
}); 

export const FETCH_SINGLE_USER_STORY_SUCCESS = 'FETCH_SINGLE_USER_STORY_SUCCESS';
export const fetchSingleUserStoriesSuccess = (data) => ({
    type: FETCH_SINGLE_USER_STORY_SUCCESS,
    data
}); 

export const FETCH_SINGLE_USER_STORY_ERROR = 'FETCH_SINGLE_USER_STORY_ERROR';
export const fetchSingleUserStoriesError = (error) => ({
    type: FETCH_SINGLE_USER_STORY_ERROR,
    error
}); 

//fetch to create a short story for user
export const CREATE_USER_STORY_REQUEST = 'CREATE_USER_STORY_REQUEST';
export const createUserStoryRequest = () => ({
    type: CREATE_USER_STORY_REQUEST
}); 

export const CREATE_USER_STORY_SUCCESS = 'CREATE_USER_STORY__SUCCESS';
export const createUserStorySuccess = (data) => ({
    type: CREATE_USER_STORY_SUCCESS,
    data
}); 

export const CREATE_USER_STORY_ERROR = 'CREATE_USER_STORY_ERROR';
export const createUserStoryError = (error) => ({
    type: CREATE_USER_STORY_ERROR,
    error
}); 

//fetch to edit a single short stories from user

export const EDIT_USER_STORY_REQUEST = 'EDIT_USER_STORY_REQUEST';
export const editUserStoryRequest = () => ({
    type: EDIT_USER_STORY_REQUEST
}); 

export const EDIT_USER_STORY_SUCCESS = 'EDIT_USER_STORY_SUCCESS';
export const editUserStorySuccess = (data) => ({
    type: EDIT_USER_STORY_SUCCESS,
    data
}); 

export const EDIT_USER_STORY_ERROR = 'EDIT_USER_STORY';
export const editUserStoriesError = (error) => ({
    type: EDIT_USER_STORY_ERROR,
    error
}); 

//fetch to delete a single short stories from user
export const DELETE_USER_STORY_REQUEST = 'DELETE_USER_STORY_REQUEST';
export const deleteUserStoryRequest = () => ({
    type: DELETE_USER_STORY_REQUEST
}); 

export const DELETE_USER_STORY_SUCCESS = 'EDIT_USER_STORY_SUCCESS';
export const deleteUserStorySuccess = (data) => ({
    type: DELETE_USER_STORY_SUCCESS,
      data
}); 

export const DELETE_USER_STORY_ERROR = 'DELETE_USER_STORY_ERROR';
export const deleteUserStorYError = (error) => ({
    type: DELETE_USER_STORY_ERROR,
    error
}); 

//get all stories from the user
export const fetchStories = () => (dispatch) => {
    dispatch(fetchUserStoriesRequest()); 
    fetch(`${API_BASE_URL}/api/stories`,
    {
        method: 'GET', 
    }
    )
    .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(stories => {
        var result = stories.map((story, index) => {
            var newObj = Object.assign({}, story);
            // here we add a new key/value pairs that may be modified later
            newObj.isEditing = false;
            return newObj;
          })
        console.log('STORIES ', result); 
        
        dispatch(fetchUserStoriesSuccess(result))
    }).catch(err => (fetchUserStoriesError(err))) 
};

//get all stories for the user
export const fetchAStory = (id) => (dispatch) => {
    dispatch(fetchSingleUserStoryRequest()); 
    fetch(`${API_BASE_URL}/api/stories/${id}`, 
    {
        method: 'GET',
    }
    ).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json(); 
    }).then(stories => dispatch(fetchSingleUserStoriesSuccess(stories)).catch(err => (fetchUserStoriesError(err))))
} 

//fetch to create a short story for user
export const createshortStory = (title, story) => (dispatch, getState) => {
    dispatch(createUserStoryRequest()); 
    let authToken = getState().auth.authToken; 
    fetch(`${API_BASE_URL}/api/stories`, 
    {
        method: 'POST', 
        headers: {'Content-Type':'application/json', 
            Authorization: `Bearer ${authToken}`
    }, 
        body: JSON.stringify({
            title, 
            story
        })
    }).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText); 
        }
        return res.json(); 
    }).then(stories => dispatch(createUserStorySuccess()))
    .catch(err => dispatch(createUserStoryError(err))); 
}
