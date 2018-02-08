import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
    render() {
        const { title, type, name, placeholder, value, onChange } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input 
                    type={type} 
                    name={name} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required/>
            </div>    
        );
    }
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

export default FormInput