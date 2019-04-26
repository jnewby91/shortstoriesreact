import React, {Component} from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import { login } from '../actions/auth';
import {connect} from 'react-redux'; 


export class LogInForm extends Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(login(values.email,values.password))
    }

    render() {
        {console.log(this.props)}
        let error; 

        if(this.props.errorMessage){
             error = (
                <div className='form-error'> 
                    <p>{this.props.errorMessage}</p>
                </div>
            )
        }

        return(
            <div>
          
                <form 
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <h2>Log Into Your Account</h2>
                    <p>Enter your email address and password 
                    create more stories, submit a prompt 
                    and add to your collection
                    </p>
                    {error}
                    {/* <label htmlFor="email">E-mail Address:</label> */}
                    <Field name="email" id="email" type="email" placeholder="Email Address"component="input" />
                    {/* <label htmlFor="password">Password:</label> */}
                    <Field name="password" id="password" type="password" component="input" placeholder="Password" />
                    <button type="submit">Log-In</button>
                </form>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
   console.log(state);
   
   return ({
       errorMessage: state.auth.error
   })
}


const LoginComponent = reduxForm({
    form: 'login', 
    onSubmitFail: (errors, dispatch) => 
    dispatch(focus('login', 'email'))
})(LogInForm);

export default connect(mapStateToProps)(LoginComponent);

