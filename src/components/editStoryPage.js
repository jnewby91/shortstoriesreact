import React from 'react'; 
import {connect} from 'react-redux'; 
import { Navigator } from './nav';
import { StoryForm } from './story';


class EditStory extends React.Component{
    constructor(props){
        super(props); 
        this.state =({  
            editing: ''
        })
    } 
    // componentDidMount(){
        
    // }

    render(){
            return(
                <div className="editStory">
                    {console.log(this.props)}
                    <Navigator {...this.props} />
                    <StoryForm />
                </div>
            )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null, 
    currentUser: state.auth.currentUser

}); 

export default connect(mapStateToProps)(EditStory); 