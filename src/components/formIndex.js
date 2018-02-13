import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

class FormIndex extends Component {

    renderInput(field) {
        return (
            <div>
                <input className="form_input" {...field.input} type={field.type} placeholder={field.placeholder} />
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

    render () {
        return (
            <form>
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
    if(!values.email) {
        errors.email = 'Please enter your email';
    }
    if(values.email == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
        errors.email = 'Invalid email';
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