import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput.jsx';
import Button from './Button.jsx';
import DateInput from './DateInput.jsx';

class Form extends React.Component {
    render() {
        return (
            <form>
                <FormInput type="text" name="firstName" placeholder="First Name" />
                <FormInput type="text" name="lastName" placeholder="Last Name" />
                <FormInput type="email" name="email" placeholder="Email" />
                <DateInput />
                <Button />
            </form>
        )
    }
}

export default Form;