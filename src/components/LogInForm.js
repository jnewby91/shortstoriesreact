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
            <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {error}
                <label htmlFor="email">E-mail Address:</label>
                <Field name="email" id="email" type="email" component="input" />
                <label htmlFor="password">Password:</label>
                <Field name="password" id="password" type="password" component="input" />
                <button type="submit">Submit</button>
            </form>
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

