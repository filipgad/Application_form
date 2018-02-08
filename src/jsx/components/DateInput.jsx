import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class DateInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startData: moment()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({startDate: date});
      }
      
    render() {
        return <DatePicker
        placeholderText="Click to select the event date"
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={moment()}
        dateFormat="L"
        locale="pl"
        showDisabledMonthNavigation />
    }
}

export default DateInput