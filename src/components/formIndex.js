import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class FormIndex extends Component {
    render () {
        return (
            <form>
                <Field 
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First name"
                />
                <Field 
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last name"
                />
                <Field 
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
};

FormIndex = reduxForm({
    form: 'form'
})(FormIndex);

export default FormIndex;