import React,{Component} from 'react'; 
import {connect} from 'react-redux'; 
import './stories.css'; 
import {Link} from 'react-router-dom';
import Navigator from './nav'
import Story from './story'; 
import { fetchStories } from '../actions/stories';
 
import Redirect from 'react-router-dom/Redirect';

/**
 * TODO: Connect AccountPage Component to mapStateToProps 
 * TODO:I will need to add map the stories in a collection variable that would allow the array objects to be displayed on the page
 * 
 * TODO: If props.logged is true then user will be logged will see account page, else redirect them to sign-up page
 * 
 * I'll need to submit the values of state when user clicks save on the page. 
 * 
 * LINE 30(currentTitle) & 31(currentStory): Needs to be the values story.title and story.currentStory respectively 
 * IDEA: COULD DO A CONDITIONAL STATEMENT FOR SETTING THE VALUE OF TITLE AND STORY FOR COLLECTION
 * WHILE EDITING IS FALSE TITLE IS EQUAL TO CURRENT TITLE, WHEN TRUE TITLE IS EQUAL TO CURRENT TITLE
 * 
 */


class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false, 
            localStoryCollection: this.props.storyCollection,
            currentId: '', 
            currentTitle: '',
            currentStory: '' 
        };
        this.handleEditUpdate = this.handleEditUpdate.bind(this); 
        this.handleEditMode = this.handleEditMode.bind(this); 
    }

    componentDidMount() {
        this.props.dispatch(fetchStories())
    }

    handleEditMode(e){
        let selectedStory = e.target.getAttribute('data-storyid'); 
        console.log('here is the id', selectedStory); 
        //copy the object(localStoryCollection) , loop through array,replaces the one that is matching,go to state, forEach and find the id, then  
        let updatedStories = this.state.localStoryCollection.map((story) => {
            if(story.id === selectedStory){
                story.isEditing = !story.isEditing;  
            }
            return story; 
        })
            this.setState({
            localStoryCollection: updatedStories
        })
    }

    handleEditUpdate(e, type, index){
        console.log(type, 'type'); 
        const value = e.target.value; 
        if(type === 'title'){
            this.setState({
                currentTitle: value
            });
        } else{
            this.setState({
                currentStory: value
            });
        }
    }

    render() {
        if (this.props.loggedIn) {
            const collection = this.state.localStoryCollection.map((story, index) => {
                return (
                    <div className="stories-wrapper" key={index}>
                        <Story
                            storyId={story.id}
                            title={story.title}
                            isEditing={story.isEditing}
                            category={story.category}
                            story={story.story}
                            date={story.date}
                            handleEditUpdate={this.handleEditUpdate}
                            handleEditMode={this.handleEditMode}
                       />
                    </div>
                )
        }) 
            return(
                <div className="storiesPage">
                    <Navigator />
                    <h2 className='pageTitle'>Stories</h2>
                        {collection}
                </div>
            )
        }
            return(
                <Redirect to="/log-in" />
        )    
    }
}        


const mapStateToProps = state => {
    console.log(state);

    return ({
        loggedIn: state.auth.currentUser !== null,
        currentUser: state.auth.currentUser,
        storyCollection: state.storeAndPrompt.storyCollection

    })
}

export default connect(mapStateToProps)(Stories); 