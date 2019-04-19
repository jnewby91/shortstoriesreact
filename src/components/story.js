import React, {Component} from 'react'; 
import {reduxForm, Field } from 'redux-form';
import {creatshortStory} from '../actions/stories' 
import './story.css'; 


class StoryForm extends Component { 
    constructor(props){
        super(props)
            this.state= {
                title: '',
                story: ''
            }
    }

    handleSubmit(event){
        event.preventDefault()
        const title = this.state.title; 
        const story = this.state.story;
        this.props.dispatch(creatshortStory(title, story))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="storyForm">
                <label for="title" id="title">Title</label>
                <Field  id="title"type="text" name="title" component="input" />
                <label for="story" id="story" >Short Story</label>
                <Field name="story" id="story" cols="30" rows="10"  component="textarea"/>
                    Create one to two paragraphs describing your writing prompt. 
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'story'
}) (StoryForm); 
