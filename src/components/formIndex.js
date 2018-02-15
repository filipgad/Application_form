import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from 'react-datepicker';
import moment from 'moment';

class FormIndex extends Component {

    renderInput({ meta: { touched, error }, input, type, placeholder }) {
        const errorStyle = touched && error ? 'inputError' : '';

        return (
            <div>
                <input 
                    className={`inputForm ${errorStyle}`} 
                    {...input} 
                    type={type} 
                    placeholder={placeholder} 
                />
                <div className="inputErrorText">
                    {touched ? error : ''}
                </div>
            </div>
        )
    };

    renderDatePicker = ({ meta: { touched, error }, input: { onChange, value, name }, placeholder }) => {
        return (
            <div>
                <DatePicker
                    name={name}
                    onChange={onChange}
                    placeholderText={placeholder}
                    format="DD.MM.YYYY"
                    minDate={moment()} 
                    locale="pl"
                    selected={value || null}
                    readOnly={true}
                />
                <div className="inputErrorText">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h1>SIGN UP FOR THE EVENT</h1>
                <Field 
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    component={this.renderInput}
                />
                <Field 
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    component={this.renderInput}
                />
                <Field 
                    name="email"
                    type="email"
                    placeholder="Email"
                    component={this.renderInput}
                />
                <Field
                    name="datepicker"
                    placeholder="Choose the event date"
                    component={this.renderDatePicker}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
};

const validate = values => {
    const errors = {};

    if(!values.firstName) {
        errors.firstName = 'Please enter your name';
    }
    if(!values.lastName) {
        errors.lastName = 'Please enter your last name';
    }
    if(!values.email) {
        errors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Ivalid email';
    }
    if(!values.datepicker) {
        errors.datepicker ='Please choose the event date';
    }

    return errors;
};

FormIndex = reduxForm({
    validate,
    form: 'SignUpForm'
})(FormIndex);

export default FormIndex;