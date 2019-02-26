// import React, {Component} from 'react';
// import {reduxForm, Field} from 'redux-form';


// export class LogInForm extends Component {
//     onSubmit(values, handleSubmit) {
//         console.log(values); 
//     }

//     render() {
//         return(
//         <form 
//             onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
//             <label htmlFor="email">E-mail Address:</label>
//             <Field name="email" id="email" type="email" component="input" />
//             <label htmlFor="password">Password:</label>
//             <Field name="password" id="password" type="text" component="input" />
//             <button type="submit">Submit</button>
//         </form>
//         ); 
//     }
// }

// export default reduxForm({
//     form: 'login'
// })(LogInForm);