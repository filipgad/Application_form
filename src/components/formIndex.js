import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

class FormIndex extends Component {

    renderInput(field) {
        const { touched, error } = field.meta;
        const errorStyle = touched && error ? 'inputError' : '';

        return (
            <div>
                <input 
                    className={`inputForm ${errorStyle}`} 
                    {...field.input} 
                    type={field.type} 
                    placeholder={field.placeholder} 
                />
                <div className="inputErrorText">
                    {touched ? error : ''}
                </div>
            </div>
        )
    };

    // renderDatePicker(field) {
    //     return (
    //         <div>
    //             <DatePicker 
    //                 {...field.input} 
    //                 placeholderText={field.placeholder} 
    //                 minDate={field.minDate} 
    //                 locale="pl"
    //                 selected={field.input.value ? moment(field.input.value, 'DD/MM/YYYY') : null}
    //                 />
    //         </div>
    //     )
    // }

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
                    name="eventDate"
                    type="date"
                    placeholder="Choose the event date"
                    component={this.renderInput}
                />
                {/* <Field
                    name="datepicker"
                    placeholder="Choose the event date"
                    minDate={moment()}
                    component={this.renderDatePicker}
                    format={(value, name) => value || null}
                    // if you want normalize before store on redux...
                    // normalize={value => (value ? moment(value, 'DD/MM/YYYY') : null)}
                /> */}
                <button type="submit">Submit</button>
            </form>
        );
    }
};

function validate(values) {
    const errors = {};

    if(!values.firstName) {
        errors.firstName = 'Please enter your name';
    }
    if(!values.lastName) {
        errors.lastName = 'Please enter your last name';
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter valid email';
    }
    if(!values.eventDate) {
        errors.eventDate ='Please choose the event date';
    }

    return errors;
};

FormIndex = reduxForm({
    validate,
    form: 'SignUpForm'
})(FormIndex);

export default FormIndex;