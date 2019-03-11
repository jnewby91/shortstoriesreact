import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { login } from './actions/auth';


export class LogInForm extends Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(login(values.email,values.password))
    }

    render() {
        return(
        <form 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <label htmlFor="email">E-mail Address:</label>
            <Field name="email" id="email" type="email" component="input" />
            <label htmlFor="password">Password:</label>
            <Field name="password" id="password" type="password" component="input" />
            <button type="submit">Submit</button>
        </form>
        ); 
    }
}

export default reduxForm({
    form: 'login'
})(LogInForm);