import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import './log-in.css' 

export default class LogIn extends Component{
    constructor(props){
        super(props); 
    
    }


    render(){
        return(
            <nav>
                <h1>Logo</h1>
                <ul>
                    <Link to="stories"><li>Stories</li></Link>
                    <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                </ul>
            </nav>

            

        )



    }
}