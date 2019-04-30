import React, {Component} from 'react'; 
import './createStoryPage.css';
import {Link} from 'react-router-dom';
import Prompt from './prompt';
import StoryForm from './story';
import { Navigator } from './nav';
import {connect} from 'react-redux'; 
import Redirect from 'react-router-dom/Redirect';
import { fetchPrompts } from '../actions/prompts';

class CreateStory extends Component{
    constructor(props){
        super(props);
        this.state=({
            promptIndex : 0
        })
 
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
        this.setState({
            promptNum: number + 1
        })
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
                   <Prompt currentPrompt={this.props.currentPrompt}/>
                    <StoryForm />
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
