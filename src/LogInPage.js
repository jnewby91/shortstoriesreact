import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'; 
import './log-in.css' 
import LogInForm from './LogInForm';


export class LogInPage extends React.Component{
    constructor(props){
        super(props); 
    
    }

    render(){
        return(
            <div> 
                <nav>
                    <h1>Logo</h1>
                    <ul>
                        <Link to="stories"><li>Stories</li></Link>
                        <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                    </ul>
                </nav>
                <LogInForm />
            </div>
        )



    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogInPage);
