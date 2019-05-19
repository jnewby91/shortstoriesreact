import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Link, Redirect} from 'react-router-dom';

import SignUpForm from './signUpForm'; 
import { Navigator } from './nav';

export class SignUpPage extends React.Component{
    constructor(props){
        super(props); 
}
   render(){
       if(this.props.loggedIn) {
           return <Redirect to="/stories-page" />
       }
    return(
        <div>
            <Navigator />
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