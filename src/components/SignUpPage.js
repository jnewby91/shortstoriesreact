import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Link, Redirect} from 'react-router-dom';

import SignUpForm from './signUpForm'; 

export class SignUpPage extends React.Component{
    constructor(props){
        super(props); 
}
   render(){
       if(this.props.loggedIn) {
           return <Redirect to="/account-page" />
       }
    return(
        <div>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <a href="#howItWorks"><li>Features</li></a>
                    <Link to="stories"><li>Stories</li></Link>
                    <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                    <Link to="sign-up"><li>Sign Up</li></Link>
                    <Link to="log-in"><button>Log In</button></Link>
                </ul>
        </nav>
            <h2>Sign Up Here:</h2>
            <SignUpForm />
        </div>
    )
}
   }
    
 

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);