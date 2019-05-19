import React,{Component} from 'react'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';

export class Navigator extends React.Component{
    
    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();  
    }

    render(){
        if(this.props.loggedIn){
            return(
                <nav> 
                    <Link to="/"><h1>Spark</h1> </Link>
                    <ul>
                        <Link to="stories-page"><li>My Stories</li></Link>
                        <Link to="create-a-story-page"><li>Create Story</li></Link>
                        <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                        <button onClick={()=> {this.logOut()}}>Log Out</button>
                    </ul> 
                </nav>    
            )
        }
            return(
                    <nav>
                    <Link to="/"><h1>Spark</h1> </Link>
                    <ul>
                        <Link to="sign-up"><li>Sign Up</li></Link>
                        <Link to="log-in"><button>Log In</button></Link>
                    </ul>
                </nav>
            )
        }   
    }

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navigator)