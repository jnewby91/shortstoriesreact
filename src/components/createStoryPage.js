import React, {Component} from 'react'; 
import './createStoryPage.css';
import {Link} from 'react-router-dom';
import Prompt from './prompt';
import StoryForm from './story';
import { Navigator } from './nav';

class CreateStory extends Component{
    constructor(props){
        super(props); 
 
}
    render(){
        return(
            <div className="createStory">
               <Navigator />
                <Prompt 
                    title="The Moment Of Black" 
                    scenario="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
                />
                <StoryForm />
            </div>
        )
    }
}

export default CreateStory; 
