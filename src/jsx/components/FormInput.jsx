import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
    render() {
        const {name, type, placeholder } = this.props;
        return (
            <label>
                <input type={type} name={name} placeholder={placeholder}/>
            </label>
        );
    }
}

export default FormInput;