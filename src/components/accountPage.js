import React,{Component} from 'react'; 
import {connect} from 'react-redux'; 
import './accountPage.css'; 
import {Link} from 'react-router-dom';
import Sidebar from 'react-sidebar'; 
import Collections from './collection'; 
import { fetchStories } from '../actions/stories';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth'; 
import Redirect from 'react-router-dom/Redirect';

/**
 * TODO: Connect AccountPage Component to mapStateToProps 
 * TODO:I will need to add map the stories in a collection variable that would allow the array objects to be displayed on the page
 * 
 * TODO: If props.logged is true then user will be logged will see account page, else redirect them to sign-up page
 */


class AccountPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: true
        }; 
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this); 
    }
    
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen:open}); 
    }

    componentDidMount() { 
        this.props.dispatch(fetchStories())
    }

    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();  
    }


    render(){
        if(this.props.loggedIn){   
            const collection = this.props.storyCollection.map((story, index) => {
                return(
                    <div className="collection-wrapper" key={index}>        
                        <Collections                 
                            title = {story.title}
                            category = {story.category}
                            story = {story.story}
                            date = {story.date}  
                        />
                    </div>
                )
        }) 
            return(
            <div className="accountPage">
                <Sidebar  
                    sidebar={
                        <div>
                            <h2>Jnewby</h2>
                            <p>{this.props.loggedIn}</p>
                            <p className="tagline">This is what stories mean to me!</p>
                          
                            <div className="buttonPanel">
                                <Link to="create-a-story-page"> 
                                <div className="button">
                                    {/* <img src="../5173a43b9c.png" alt="plusicon.png"/> */}
                                    <p>Create Story</p>
                                </div> 
                                </Link>
                            <div className="button">
                                {/* <img src="../5173a43b9c.png" alt="plusicon.png"/> */}
                                <p>Create Prompt</p>
                            </div>
                            <div className="button">
                                {/* <img src="./icons/b7c37c5a9e.png" alt="personicon.png"/> */}
                                <p>Settings</p>
                            </div> 
                            <div className="button">
                                {/* <img src="https://drive.google.com/file/d/1I7CDOykwu9_Et1r1eN22nXQjqSEC4QM2/view?usp=sharing" alt="logout.png"/> */}
                                <button onClick={()=> this.logOut()}>Logout</button>
                            </div>     
                            
                            </div>
                    </div>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    /**
                     * position: fixed;
                     * top: 50px;
                     *  margin-top: 30px;
                     *  height: 100%;
                     * width: 200px;
                     * padding: 1%;
                     *  background-color: lightgrey;
                     */
                    styles={{ sidebar: { background: "lightgrey", top: 30, marginTop:100, width: 200, padding: 20 } }}
                >
                
                <button onClick={() => this.onSetSidebarOpen(true)}>
                
                
                </button>
    
                </Sidebar>
    
                <h2 className='pageTitle'>Collections</h2>
                
                {collection}
    
                {/* <Collections 
                    title = {'Title'}
                    category = {'category'}
                    story = {'Lorem '}
                    date = {'1/10/2019'}
                />
    
    
                <Collections 
                    title = {'Title'}
                    category = {'category'}
                    story = {'Lorem '}
                    date = {'1/10/2019'}
                /> */}
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
        storyCollection: state.storeAndPrompt.storyCollection
    
    })
} 

export default connect(mapStateToProps) (AccountPage); 