import React, {Component} from 'react'; 
import './createStoryPage.css';
import {Link} from 'react-router-dom';
import PromptForm from './promptForm';
import { Navigator } from './nav';
import {connect} from 'react-redux'; 
import Redirect from 'react-router-dom/Redirect';

class submitPromptPage extends Component{
    constructor(props){
        super(props); 
 
}

    render(){  
            return(
                <div className="submitPromptPage">
                   <Navigator {...this.props} />
                    <h2>Create Your Own Writing Prompt</h2>
                    <PromptForm />
                </div>
            )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser,
    storyCollection: state.storeAndPrompt.storyCollection
})

export default connect(mapStateToProps)(submitPromptPage); 
