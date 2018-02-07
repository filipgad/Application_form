import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx'

document.addEventListener('DOMContentLoaded', function() {


  ReactDOM.render(
    <div>
      <h1>Sign up for the event</h1>
      <Form />
    </div>,
    document.getElementById('app')
  );
});
