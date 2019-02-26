import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import './log-in.css' 
import {LogInForm} from './logInForm';


export class LogIn extends React.Component{
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
                {/* <LogInForm /> */}
            </div>
        )



    }
}

// export default connect(mapStateToProps)(Login);
