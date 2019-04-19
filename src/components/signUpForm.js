import React, {Component} from 'react'; 
import {reduxForm, Field, focus} from 'redux-form';
import {registerUser} from '../actions/users';



export class SignUpForm extends Component {

    onSubmit(values){
        console.log(values); 
        this.props.dispatch(registerUser(values))
    }

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="email">E-mail Address:</label>
                <Field name="email" id="email" type="email" component="input"
                ></Field>
                <label htmlFor="userName">User Name:</label>
                <Field name="userName" id="userName" type="text" component="input"
                ></Field>
                <label htmlFor="firstName">First Name: </label>
                <Field name="firstName" id="firstName" type="text" component="input"
                ></Field>
                <label htmlFor="lastName">Last Name: </label>
                <Field name="lastName" id="lastName" type="text" component="input"
                ></Field>
                <label htmlFor="tagline">Whats your Opinion on Stories: </label>
                <Field name="tagline" id="tagline" type="text" component="input"
                ></Field>
                <label htmlFor="password">Password: </label>
                <Field name="password" id="password" type="password" component="input"
                ></Field>
                <button type="submit">Register</button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);