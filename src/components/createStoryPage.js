import React, {Component} from 'react'; 
import './createStoryPage.css';
import {Link} from 'react-router-dom';
import Prompt from './prompt';
import StoryForm from './storyForm';
import { Navigator } from './nav';
import {connect} from 'react-redux'; 
import Redirect from 'react-router-dom/Redirect';
import { fetchPrompts, goToNextPrompt, goToLastPrompt } from '../actions/prompts';

class CreateStory extends Component{
    constructor(){
        super();
        this.state=({
            promptIndex : 2
        })

this.handleGoBackward = this.handleGoBackward.bind(this); 
this.handleGoForward = this.handleGoForward.bind(this); 

}
/**
 * Need to: 
 * dispatch fetchPrompts action when the component renders 
 * After information comes back i'll need to mapStateToProps and connect the Prompts component to redux
 * Insted of map mapping over every element in the array I just need one 
 * 
 * So if I fetch all the prompts and then have a variable that represents the index of the prompt number i'll be able  to go through each prompt on a button click 
 * 
 * Next I will need to declare a variable and button[put a onClick inside of the props for prompts button] to iterate through the different scenarios on the page 
 */

    componentDidMount(){
        this.props.dispatch(fetchPrompts()); 
    }

    changePrompts(number){
        number = this.state.promptNum; 
        
    }

    handleGoForward(){
        this.props.dispatch(goToNextPrompt());
    }

    handleGoBackward(){
        this.props.dispatch(goToLastPrompt());

    }

    render(){  
        const currentPrompt = this.props.prompts.filter((item, index) => {
            return item.index === this.state.promptIndex;
        });

        if(this.props.prompts){
            return(
                <div className="createStory">
                    {console.log(this.props)}
                    <Navigator {...this.props} />
                    <div className="page_banner">
                        <h2>Create Your Story</h2>
                        <p>Search from the scenarios below to chose the theme of your short story! These created are user created scenarios so it may or not be ficiton! </p>
                    </div>
                    <div className="scenario_section">
                        <Prompt currentPrompt={this.props.currentPrompt}/>
                        <div className="button_section">
                            <button id="submit_button" onClick={this.handleGoBackward}>Back</button>
                            <button id="submit_button" onClick={this.handleGoForward}>Next</button>
                        </div>
                    </div>
                    <div className="shortStory_section">
                        <h2>Start writing</h2>
                        <p>Your Epic Story is waiting to made!</p>
                        <StoryForm />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser,
    prompts: state.storeAndPrompt.prompts,
    currentPrompt: state.storeAndPrompt.currentPrompt
})

export default connect(mapStateToProps)(CreateStory); 


{/* <Prompt currentPrompt={this.props.currentPrompt}/> */}
