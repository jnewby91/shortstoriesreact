import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import '../components/collection.js'
import './collection.css'

//Make a prop that allows the readonly property to be added| This is why I made props.editable
//onChange need to be able to update the value of title and story

export default class Collections extends Component{
    constructor(props){
        super(props); 
        this.state = {
            isEditing: false
        }

        this.handleEditMode = this.handleEditMode.bind(this); 

    }

    handleEditMode(){
        this.setState({
            isEditing: !(this.state.isEditing)
        })
    }

    render(){

        return(
            <div className= "collections">
                <input  
                    value={this.props.title} 
                    readOnly={!this.props.editing} 
                    onChange={(e) => this.props.handleEditUpdate(e, 'title')}
                />
                <p>{this.props.category}</p> 
                <textarea 
                    value={this.props.story}  
                    readOnly={!this.props.editing} 
                    onChange={(e) => this.props.handleEditUpdate(e, 'story')}
                ></textarea>
                <p>{this.props.date}</p> 
                <div className="button_section">
                    <button 
                        onClick={this.handleEditMode}
                    >
                    {(this.state.isEditing) ? 'Save Story': 'Edit Story   '}
                    </button>   
                    <button>Delete Story</button>
                </div>
            </div>
            )
        }

    }

    