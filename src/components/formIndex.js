import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as actions from '../actions/actionIndex';

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
        const errorStyle = touched && error ? 'inputError' : '';

        return (
            <div>
                <DatePicker
                    name={name}
                    onChange={onChange}
                    className={errorStyle}
                    selected={value || null}
                    placeholderText={placeholder}
                    dateFormat="DD.MM.YYYY"
                    minDate={moment()} 
                    locale="pl"
                    readOnly={true}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
                <div className="inputErrorText">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        const { signupEvent, reset } = this.props;
        return signupEvent(values).then( () => {
            reset();
        });
    };

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
                    name="eventDate"
                    placeholder="Choose the event date"
                    component={this.renderDatePicker}
                />
                <button type="submit">Sign Up</button>
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
    if(!values.eventDate) {
        errors.eventDate ='Please choose the event date';
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'SignUpForm',
})(
    connect(null, actions)(FormIndex)
);