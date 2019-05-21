import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import './story.css';

//Make a prop that allows the readonly property to be added| This is why I made props.editable
//onChange need to be able to update the value of title and story

export default class Story extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.storyId,
            title: this.props.title, 
            story: this.props.story
        }
    }

//I want this to only update localstate, until you hit save in the parent component


    handleChange(e, type){
        //handle what is coming in and update state 
        let value = e.target.value; 
        if(type === 'title'){
            this.setState({
                title: value
            }); 
        } else{
            this.setState({
                story: value
            })
        }
    }
    render(){ 

        return(
            <div className= "story">
                <input  
                    value={this.state.title} 
                    readOnly={!this.props.isEditing} 
                    onChange={(e) => this.handleChange(e, 'title')}
                />
                <p>{this.props.category}</p> 
                <textarea 
                    defaultValue={this.props.story}  
                    readOnly={!this.props.isEditing} 
                    onChange={(e) => this.handleChange(e, 'story')}
                ></textarea>
                <p>{this.props.date}</p> 
                <div className="button_section">
                    <button 
                        //send up state object as well 
                        onClick={(e) => this.props.handleEditMode(e, this.state)}
                        data-storyid={this.props.storyId}
                    >
                    {(this.props.isEditing) ? 'Save Story': 'Edit Story'}
                    </button>   
                    <button>Delete Story</button>
                </div>
            </div>
            )
        }

    }

    