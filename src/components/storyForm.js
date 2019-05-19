import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {createshortStory} from '../actions/stories' 
import './story.css'; 


export class StoryForm extends React.Component { 
    constructor(props){
        super(props);
            this.state = {
                title: '',
                story: ''
            }
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStoryChange = this.handleStoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   
    
    handleTitleChange(event){
        console.log(event);
        this.setState({
            title: event.target.value
        });
    }

    handleStoryChange(event){
        console.log(event);
        this.setState({
            story: event.target.value
        });
    }


    handleSubmit(event){
        console.log('oweifjow');
        event.preventDefault();
        const title = this.state.title; 
        const story = this.state.story;
        this.props.dispatch(createshortStory(title, story));
        console.log('i see this');

    }

        render(){
            return (
                <form onSubmit={(e) => {this.handleSubmit(e)}} className="storyForm">
                    <label htmlFor="title" id="title">Title</label>
                    <input  id="title"type="text" name="title" value={this.state.title} onChange={(e)=> {this.handleTitleChange(e)}}/>
                    <label htmlFor="story" id="story" >Short Story</label>
                    <textarea name="story" type="textarea" id="story" cols="30" rows="10" value={this.state.story} onChange={(e)=> {this.handleStoryChange(e)}} />
                    <button type="submit">Submit</button>
                </form>
            );
        }
    }

export default connect()(StoryForm);
