import React, { useState } from 'react';
import { postUser } from '../services/api';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const [failedRequest, setFailedRequest] = useState(false);
  const [successfulRequest, setSuccessfulRequest] = useState(false);
  const [failedRequestMessage, setFailedRequestMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
      <form>
        <label htmlFor="name">
          <p>Name:</p>
          <input type="name" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label htmlFor="email">
          <p>Email:</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label htmlFor="password">
          <p>Password:</p>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <button type="submit" onClick={(event) => submitForm(event)}>Submit</button>
      </form>
      { (failedRequest) ? <p>{ failedRequestMessage }</p> : null }
      { (successfulRequest) ? <p>User created</p> : null }
    </>
  );
}

export default RegisterForm;
