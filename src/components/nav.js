import React,{Component} from 'react'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 

export class Navigator extends React.Component{
    
    render(){
        if(this.props.loggedIn){
            return(
                <div className="Navigator"> 
                    <Link to="/"><h1>Logo</h1> </Link>
                    <ul>
                        <Link to="stories"><li>Stories</li></Link>
                        <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                        <button>Log Out</button>
                    </ul> 
                </div>    
            )
        }
        <nav>
          <Link to="/"><h1>Logo</h1> </Link>
          <ul>
              <Link to="sign-up"><li>Sign Up</li></Link>
              <Link to="log-in"><button>Log In</button></Link>
          </ul>
        </nav>

    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navigator)