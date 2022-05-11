import React, { useState } from 'react';
import { postUser } from '../services/api';
import UserForms from '../components/UserForms';

function SignUp() {
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
    <div className="page_content">
      <div className="signup__container">
        <img className="avatar__img" src="./img/avatar.svg" alt="avatar" />
        <p className="signup__title">Sign up</p>
        <UserForms
          formData={formData}
          setFormData={setFormData}
        />
        { (failedRequest) ? <p className="signup__failed">{ failedRequestMessage }</p> : null }
        { (successfulRequest) ? <p className="signup__successful">User created</p> : null }
        <button
          className="signup__submit_btn"
          type="submit"
          onClick={(event) => submitForm(event)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUp;
