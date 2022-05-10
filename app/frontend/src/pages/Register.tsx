import React, { useState } from 'react';
import { postUser } from '../services/api';
import UserForms from '../components/UserForms';

function Register() {
  const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    password: '',
  };

  const [failedRequest, setFailedRequest] = useState(false);
  const [successfulRequest, setSuccessfulRequest] = useState(false);
  const [failedRequestMessage, setFailedRequestMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    postUser('/users', formData)
      .then(() => {
        setFailedRequest(false);
        setSuccessfulRequest(true);
        setFormData(INITIAL_FORM_STATE);
      })
      .catch((error) => {
        setFailedRequest(true);
        setSuccessfulRequest(false);
        setFailedRequestMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p>Register Page</p>
      <UserForms
        formData={formData}
        setFormData={setFormData}
      />
      <button
        type="submit"
        onClick={(event) => submitForm(event)}
      >
        Submit
      </button>
      { (failedRequest) ? <p>{ failedRequestMessage }</p> : null }
      { (successfulRequest) ? <p>User created</p> : null }
    </>
  );
}

export default Register;
