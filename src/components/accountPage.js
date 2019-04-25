import React,{Component} from 'react'; 
import {connect} from 'react-redux'; 
import './accountPage.css'; 
import {Link} from 'react-router-dom';
import Navigator from '../components/nav'
import Collections from './collection'; 
import { fetchStories } from '../actions/stories';
 
import Redirect from 'react-router-dom/Redirect';

/**
 * TODO: Connect AccountPage Component to mapStateToProps 
 * TODO:I will need to add map the stories in a collection variable that would allow the array objects to be displayed on the page
 * 
 * TODO: If props.logged is true then user will be logged will see account page, else redirect them to sign-up page
 */


class AccountPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchStories())
    }


    render() {
        console.log(this.props);
        if (this.props.loggedIn) {
            const collection = this.props.storyCollection.map((story, index) => {
                return (
                    <div className="collection-wrapper" key={index}>
                        <Collections
                            title={story.title}
                            category={story.category}
                            story={story.story}
                            date={story.date}
                        />
                    </div>
                )
        }) 
            return(
                <div className="accountPage">
                    <Navigator />
                    <h2 className='pageTitle'>Collections</h2>
                        {collection}
                </div>
            )
        }
            return(
                <Redirect to="/log-in" />
        )    
    }
}
        console.log(this.props); 
        


const mapStateToProps = state => {
    console.log(state);

    return ({
        loggedIn: state.auth.currentUser !== null,
        currentUser: state.auth.currentUser,
        storyCollection: state.storeAndPrompt.storyCollection

    })
}

export default connect(mapStateToProps)(AccountPage); 