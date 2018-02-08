import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormInput from './FormInput.jsx';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            startData: moment().format('DD.MM.YYYY')
        }
    }

    handleDataChange = (date) => {
        this.setState({
          startDate: date
        });
      }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) => {
        alert(`A form was submitted: ${this.state.firstName} ${this.state.lastName} ${this.state.email} ${String(this.state.startData)}`);
        axios.post('mongodb://localhost:27017/events', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            eventData: this.state.eventData
        })
            .then(response => {
            console.log(response, 'Event added!');
            })
            .catch(err => {
            console.log(err, 'Event not added, try again');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    title="First name"
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="Enter name" />
                <FormInput 
                    title="Last name"
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Enter lastname" />
                <FormInput 
                    title="Email"
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    placeholder="Enter email" />
                <DatePicker
                    placeholderText="Choose event date"
                    selected={this.state.startDate}
                    onChange={this.handleDataChange}
                    minDate={moment()}
                    dateFormat="L"
                    locale="pl"
                    showDisabledMonthNavigation 
                    required />
                <FormInput type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form