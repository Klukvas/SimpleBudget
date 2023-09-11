import React from 'react';
import inputField from './inputField';

const RegistrationForm = () =>  {
  return (
    <div className="container">
      <h2>Registration</h2>
      <form style={{
          display: "flex",
          flexDirection: 'column',

      }}>
          <div>
            {inputField('Username', 'username', 'text')}
          </div>
          <div>
              {inputField('Email', 'email', 'email')}
          </div>
          <div>
              {inputField('Password', 'password', 'password')}
          </div>
          <div>
              {inputField('Password Confirmation', 'passwordConfirmation', 'password')}
          </div>
          <button>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
