import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'; 
import './log-in.css' 
import LogInForm from './LogInForm';
import { Navigator } from './nav';


export class LogInPage extends React.Component{
    constructor(props){
        super(props); 
    
    }

    render(){
        if(this.props.loggedIn){
            return <Redirect to="/account-page"/>
        }
        
        return(
            <div> 
                <Navigator />
                <LogInForm />
            </div>
        )



    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogInPage);
